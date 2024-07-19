import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'
import rawgGameData from './gameData.js'
import rawgGameDataSmall from './gameDataSmall.js'
import cheapSharkDataLocal from './cheapSharkDataLocal.js'


function App() {

  const [gamesData,setGamesData] = React.useState(rawgGameDataSmall.results)
  const [cheapShardData,setCheapSharkData] = React.useState([])

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

  // I'm gonna leave this here for tonight, definitely made some progress tho! What I need to figure out is how to only call setGames once - i def need to use a mapping
  // function,but maybe need to map twice... Map once to get all the api info the again to setGames value
  // I am going to try to implement using two sets of state tomorrow!
  // need to figure out how to properly return async data within a mapping function so that it properly maps to a new object within the same array structure
 
  React.useEffect(
    () =>  {
      async function fetchData(){
        let tempData = []
        for (let step = 0; step < gamesData.length; step++){
          const response = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${gamesData[step].slug}`)
          const data = await response.json()
          tempData.push(data)
        }
        // console.log(tempData)
        setCheapSharkData(tempData)
      }
      (fetchData())

  //     .then(deals => {
  //       deals.forEach(deal => {
  //       console.log(deal.json())
  //     })
  //   }
  // )
  
  }
  ,[])
        
        
        
        
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
