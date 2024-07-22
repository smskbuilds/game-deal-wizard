import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'
import rawgGameDataSmall from './gameDataSmall.js'
import { onSnapshot, addDoc } from "firebase/firestore"
import { dealsCollection } from "./firebase.js"

function App() {


  // Two state arrays - one carries games data from RAWG, the other carries deals data from CheapShark

  const [gamesData,setGamesData] = React.useState(rawgGameDataSmall.results)
  const [cheakSharkData,setCheapSharkData] = React.useState([])

  // Uploads a CheapShark deal to FireStore. Does not currently check to see if the deal already exists

  async function createNewDeal() {
    if (cheakSharkData.length>0){
    for (let step = 0; step < cheakSharkData.length; step++)
      if(cheakSharkData[step].length>0){
        for (let innerStep = 0; innerStep < cheakSharkData[step].length; innerStep++)
          {const newDealRef = await addDoc(dealsCollection,cheakSharkData[step][innerStep])
      }}
  }}

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
  
  // Given an array of game objects, map over the array & create card components from each game
  
  // console.log(cheakSharkData)
  const cards = gamesData.map(
    (card, index) =>
      <Card 
      key={card.id}
      heading={card.name}
      img={card.background_image}
      // link={cheakSharkData.length === 0 || cheakSharkData[index].length === 0 ?'#':`https://www.cheapshark.com/redirect?dealID=${cheakSharkData[index][0]['cheapestDealID']}`}
    />
    )
  
  // Connect to the Firestore `deals` DB. set cheakSharkData to DB value
  
  React.useEffect(
    () =>  {

      const unsubscribeFromDealsDB = onSnapshot(dealsCollection,(snapshot) => {
      const dealsArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
        }))
        // console.log(dealsArr)
      })

      // async function fetchDealsBySlug(){
      //   let tempData = []
      //   for (let step = 0; step < gamesData.length; step++){
      //     const response = await 
      //     fetch(`https://www.cheapshark.com/api/1.0/games?title=${gamesData[step].slug}`, {
      //       headers: {
      //         "Access-Control-Allow-Origin": "http://localhost:5173/",
      //         "Access-Control-Allow-Methods": "POST, GET, PUT",
      //         "Access-Control-Allow-Headers": "Content-Type"
      //       }
      //     })
      //     const data = await response.json()
      //     tempData.push(data)
      //   }
      //   // console.log(tempData)
      //   setCheapSharkData(tempData)
      // }
      // (fetchDealsBySlug())

    return unsubscribeFromDealsDB
  },[])

  return (
    <>
      <div>
        <Navbar />
        <div className = 'card--container'>
        {cards}
        </div>
      </div>
    </>
  )
}

export default App
