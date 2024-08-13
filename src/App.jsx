import { useState } from 'react'
import { query, where, getDocs, limit, orderBy, documentId } from "firebase/firestore"
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
      gamesOnServiceArray = doc.data()["playstationPlus"]["gamesDocumentIds"]
    })
    setGamesGivenGamesDocumentIds(gamesOnServiceArray)
  }

  async function setGamesGivenGamesDocumentIds(DocumentIds){
    // If no Ids exit function
    if(DocumentIds.length==0){return};
    // Create an array of queries to use in a Promise Pool
    const queryPool = DocumentIds.map((id) => query(gamesCollection, where(documentId(), "==", id)))
    // Call PromisePool class given queryPool array. Set max concurrencies to 1000.
    const { results, errors } = await PromisePool
    .for(queryPool)
    .withConcurrency(1000)
    .process(async q => {
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs[0].data()
    })
    // Sort results based on Metacritic score
    results.sort((a, b) => (b.metacritic == null ? 0 : b.metacritic) - (a.metacritic == null ? 0 : a.metacritic))
    // Set gamesData state with the results from PromisePool
    setGamesData(results)
  }

  async function searchResultFromDB(searchQuery){
    const q = query(gamesCollection, where('name', '==', searchQuery), limit(20))
    const querySnapshot = await getDocs(q);
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
        <div className = 'card--container'>
        {cards(filterCardsBySearch(gamesData))}
        </div>
      </div>
    </>
  )
}

export default App