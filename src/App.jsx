import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'
import rawgGameDataSmall from './gameDataSmall.js'
import { onSnapshot, addDoc } from "firebase/firestore"
import { dealsCollection } from "./firebase.js"

//Got writing to the DB working - I think it wrote 3 more files than I thought - need to figure out why & how to read from DB to verify!


function App() {

  const [gamesData,setGamesData] = React.useState(rawgGameDataSmall.results)
  const [cheapShardData,setCheapSharkData] = React.useState([])

  async function createNewDeal() {
    if (cheapShardData.length>0){
    for (let step = 0; step < cheapShardData.length; step++)
      if(cheapShardData[step].length>0){
        for (let innerStep = 0; innerStep < cheapShardData[step].length; innerStep++)
          {const newDealRef = await addDoc(dealsCollection,cheapShardData[step][innerStep])
      }}
  }}

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

  const cards = gamesData.map(
    (card, index) =>
      <Card 
      key={card.id}
      heading={card.name}
      img={card.background_image}
      link={cheapShardData.length === 0?'#':`https://www.cheapshark.com/redirect?dealID=${findCheapestDeal(cheapShardData[index])}`}
    />
    )
 
  React.useEffect(
    () =>  {
      const unsubscribe = onSnapshot(dealsCollection,(snapshot) => {
      const dealsArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
        }))
        console.log(dealsArr)
      })
        // async function fetchData(){
        // let tempData = []
        // for (let step = 0; step < gamesData.length; step++){
        //   const response = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${gamesData[step].slug}`)
        //   const data = await response.json()
        //   tempData.push(data)
        // }
        // setCheapSharkData(tempData)
      // }
      // (fetchData())
    return unsubscribe
  },[])
        
        
        
        
  //       {fetch(`https://www.cheapshark.com/api/1.0/games?title=${gamesData[step].slug}`)
  //         .then(res => res.json())
  //         .then((data) => {
  //           console.log(data)
  //           return tempCheapArray.push(data)
  //         })
  //       }
  //     }
  //     // setCheapSharkData(tempCheapArray)
  //         }
  //     ,[]
  // )

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
