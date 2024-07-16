import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'
import rawgGameData from './gameData.js'


function App() {

  const [games,setGames] = React.useState(rawgGameData)

  const cards = games.results.map(
    (card) => 
    <Card 
      key={card.id}
      heading={card.name}
      img={card.background_image}
    />
    )
  
  // React.useEffect(() => {
  //   fetch("https://www.cheapshark.com/api/1.0/deals?sortBy=DealRating&metacritic=85")
  //   .then(res => res.json())
  //   .then(data => setDeals(data))
  // }, [])


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
