import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import data from './Data.jsx'


function App() {
  const cards = data.map(
    (card) => 
    <Card 
      key={card.id}
      heading={card.heading}
      description={card.description}
      img={card.img}
    />
    )
  console.log(cards)
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
