import { useState, useEffect } from 'react'
import { onSnapshot, addDoc, collection, query, where, getDocs, limit } from "firebase/firestore"
import { dealsCollection, gamesCollection } from "./firebase.js"
import Navbar from './components/Navbar'
import Card from "./components/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App(props) {

  const [gamesData,setGamesData] = useState(props.initGamesData)
  const [cheakSharkData,setCheapSharkData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  async function FilterBySubscriptionService(service){
    const q = query(dealsCollection, where(`subscriptions.${service}`, "==", true))
    const querySnapshot = await getDocs(q);
    const gamesOnServiceArray = []
    querySnapshot.forEach((doc) => {
      // console.log(doc.data())
      gamesOnServiceArray.push(doc.data()["gamesDbId"])
    })
    setGamesGivenGamesIds(gamesOnServiceArray)
  }

  async function setGamesGivenGamesIds(Ids){
    if(Ids.length==0){return};
    const tempGamesData = []
    // for(let count = 0; count < Math.floor(Ids.length)+1; count++){
    //   const q = query(gamesCollection, where("id", "in", "NEED TO FIGURE OUT HOW TO GET A PORTION OF THE IDS BASED ON COUNT!"))
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.data())
    //     })
    //   }
    for(let count = 0; count < Ids.length; count++){
      const q = query(gamesCollection, where("id", "==", Ids[count]))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempGamesData.push(doc.data())
        console.log(doc.data())
      })
    }
    console.log(tempGamesData)
    console.log(tempGamesData.length)
    setGamesData(tempGamesData)

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
    />
    )
    return cardsDisplayed  
  }
  
  
  useEffect(
    () =>  {

      // Given an array of games, query the CheapShark API for deals using the `slug` value of each item in the array.
      // Then add the `id` from the game object to the newly created `deal` object.
      // Then set the CheapSharkData state variable to the newly created array of deals.

      // async function fetchDealsBySlug(gamesArray){
      //   let tempData = []
      //   for (let step = 0; step < gamesData.length; step++){
      //     const response = await 
      //     fetch(`https://www.cheapshark.com/api/1.0/games?title=${gamesArray[step].slug}`, {
      //       headers: {
      //         "Access-Control-Allow-Origin": "http://localhost:5173/",
      //         "Access-Control-Allow-Methods": "POST, GET, PUT",
      //         "Access-Control-Allow-Headers": "Content-Type"
      //       }
      //     })
      //     const data = await response.json()
      //     tempData.push(data)
      //   }
      //   return tempData
      // }
      
      // let tempGamesArray = gamesData
      
      // let tempDealsArray = []
      
      // fetchDealsBySlug(gamesData)
      //   .then(data => 
      //     {
      //       tempDealsArray = data
      //       return data
      //     })
      //   .then(data => 
      //     {data.map((fetchedDeal, index) => 
      //       {if(fetchedDeal.length)
      //         {tempDealsArray[index][0]['gamesDbId']=tempGamesArray[index]['id']
      //         }
      //       })
      //       setCheapSharkData(tempDealsArray)
      //     })

  },[])

  return (
    <>
      <div>
        <Navbar searchValue = {searchQuery} handleChange = {setSearchQuery} handleClick = {FilterBySubscriptionService}/>
        <div className = {'card--container'}>
        {cards(filterCards(filterCardsBySearch(gamesData)))}
        </div>
      </div>
    </>
  )
}

export default App

/* 

// Uploads a CheapShark deal to FireStore. Does not currently check to see if the deal already exists

async function createNewDeal() {
  if (cheakSharkData.length>0){
  for (let step = 0; step < cheakSharkData.length; step++)
    if(cheakSharkData[step].length>0){
      for (let innerStep = 0; innerStep < cheakSharkData[step].length; innerStep++)
        {const newDealRef = await addDoc(dealsCollection,cheakSharkData[step][innerStep])
    }}
}} 
    
*/

/* 

// Given an array of deal objects, return the cheapest deal object

function findCheapestDeal(dealArray) {
  let cheapest = {}
  //loop thru all the deals for a given game provide by the cheapShark API
  for (let step = 0; step < dealArray.length; step++){
      if(Object.keys(cheapest).length === 0){
        cheapest = dealArray[step]
      } else if (dealArray[step]['cheapest'] < cheapest['cheapest']) {
        cheapest=dealArray[step]
      }
    }
  return cheapest['cheapestDealID']
  } 
  
  */


  /* 
  
  // Connect to the Firestore `deals` DB. set cheakSharkData to DB value
  const unsubscribeFromDealsDB = onSnapshot(dealsCollection,(snapshot) => {
  const dealsArr = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
    }))
    unsubscribeFromDealsDB
  })

  const unsubscribeFromGamesDB = onSnapshot(gamesCollection,(snapshot) => {
    const gamesArr = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
      }))
      setGamesData(gamesArr)
      unsubscribeFromGamesDB
      console.log(gamesArr)
    })
    return unsubscribeFromGamesDB, unsubscribeFromDealsDB

  */