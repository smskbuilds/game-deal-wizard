import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'
import rawgGameData from './gameData.js'
import rawgGameDataSmall from './gameDataSmall.js'


function App() {

  const [games,setGames] = React.useState(rawgGameDataSmall.results)

  const cards = games.map(
    (card) => 
    <Card 
      key={card.id}
      heading={card.name}
      img={card.background_image}
    />
    )

  React.useEffect(() => {
    setGames(games.map(game => { 
      fetch(`https://www.cheapshark.com/api/1.0/games?title=${game.slug}`)
      .then(res => res.json())
      .then(data => console.log(data))   
      return {...game,foot:'test'}}))
  }, [])


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
