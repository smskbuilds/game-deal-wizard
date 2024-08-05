import { useState } from 'react'
import { query, where, getDocs, limit, orderBy } from "firebase/firestore"
import { gamesCollection, subscriptionsCollection } from "./firebase.js"
import { PromisePool } from '@supercharge/promise-pool'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App(props) {

  const [gamesData,setGamesData] = useState(props.initGamesData)
  const [cheakSharkData,setCheapSharkData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  async function FilterBySubscriptionService(service){
    const q = query(subscriptionsCollection, orderBy("playstationPlus"))
    const querySnapshot = await getDocs(q);
    let gamesOnServiceArray = []
    querySnapshot.forEach((doc) => {
      gamesOnServiceArray = doc.data()["playstationPlus"]["gamesDbIds"]
    })
    setGamesGivenGamesIds(gamesOnServiceArray)
  }

  async function setGamesGivenGamesIds(Ids){
    // If no Ids exit function
    if(Ids.length==0){return};
    // Create an array of queries to use in a Promise Pool
    const queryPool = Ids.map((id) => query(gamesCollection, where("id", "==", id)))
    // Call PromisePool class given queryPool array. Set max concurrencies to 1000.
    const { results, errors } = await PromisePool
    .for(queryPool)
    .withConcurrency(1000)
    .process(async q => {
      let queryResults = {}
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        queryResults = doc.data()
      })
      return queryResults
    })
    // Sort results based on Metacritic score
    results.sort((a, b) => b.metacritic - a.metacritic)
    // Set gamesData state with the results from PromisePool
    setGamesData(results)
  }

  async function searchResultFromDB(searchQuery){
    console.log(searchQuery.toLowerCase())
    const q = query(gamesCollection, where('name', '==', searchQuery), limit(20))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
    })
  }

  if (searchQuery.length > 2){searchResultFromDB(searchQuery)}
  
  function filterCardsBySearch(games){
    
    if (searchQuery.length > 2){
      return games.filter(game => game['name'].toLowerCase().includes(searchQuery.toLowerCase()))}
    else {return games}
  }
  
  function filterCards(games){
    return games.toSpliced(0,games.length-20)
  } 
  
  // Given an array of game objects, map over the array & create card components from each game.

  function cards(games){
    const cardsDisplayed=games.map(
    (card, index) =>
      <Card 
      key={card.id}
      heading={card.name}
      img={card.background_image}
      link={cheakSharkData.length === 0 || cheakSharkData[index].length === 0 ?'#':`https://www.cheapshark.com/redirect?dealID=${cheakSharkData[index][0]['cheapestDealID']}`}
      metacriticScore={card['metacritic']}
    />
    )
    return cardsDisplayed  
  }

  return (
    <>
      <div>
        <Navbar searchValue = {searchQuery} handleChange = {setSearchQuery} handleClick = {FilterBySubscriptionService}/>
        <div className = {'card--container'}>
        {cards(filterCardsBySearch(gamesData))}
        </div>
      </div>
    </>
  )
}

export default App