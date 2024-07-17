import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'
import rawgGameData from './gameData.js'
import rawgGameDataSmall from './gameDataSmall.js'


function App() {

  const [games,setGames] = React.useState(rawgGameData.results)
  const [surf,setSurf] = React.useState([])

  console.log(games)

  const cards = games.map(
    (card) =>
      <Card 
      key={card.id}
      heading={card.name}
      img={card.background_image}
    />
    )

  // React.useEffect(

  //   // I'm gonna leave this here for tonight, definitely made some progress tho! What I need to figure out is how to only call setGames once - i def need to use a mapping
  //   // function,but maybe need to map twice... Map once to get all the api info the again to setGames value
  //   // I am going to try to implement using two sets of state tomorrow!
    
  //   () =>  {
  //     const x = games.map(
  //         (game) => 
  //           {fetch(`https://www.cheapshark.com/api/1.0/games?title=${game.slug}`)
  //           .then(res => res.json())
  //           .then((data) => console.log('data'))}
  //           )
  //         console.log(x)
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
