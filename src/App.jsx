import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import React from 'react'


function App() {

  const [deals,setDeals] = React.useState([])

  const cards = deals.map(
    (card) => 
    <Card 
      key={card.id}
      heading={card.title}
      description='dummy text for now!'
      img={card.thumb}
    />
    )
  
  React.useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?sortBy=DealRating&metacritic=85")
    .then(res => res.json())
    .then(data => setDeals(data))
  }, [])

  console.log(deals)


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
