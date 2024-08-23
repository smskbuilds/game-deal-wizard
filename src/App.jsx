import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Cards from "./components/Cards/Cards"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

async function fetchGamesArray(page){
  const response = (await fetch(`https://gamedealwizard.com/gdw-node/${page}`)).json()
  return response
}

const initGames = await fetchGamesArray(1)

function App() {
  const [gamesData,setGamesData] = useState(initGames)
  const [page,setPage] = useState(1)
  const firstRender = useRef(true)

  function paginate() {
    setPage(prevPage => ++prevPage)
  }

  useEffect(() =>{
    if (firstRender.current){
      firstRender.current = false
    } 
    else {
      fetchGamesArray(page)
      .then(results => setGamesData(prevGames => prevGames.concat(results)))
    }
  },[page])

  return (
    <>
      <Navbar/>
      <Cards gamesArray = {gamesData}/>
      <div className = 'load-more--container'>
        <button onClick = {paginate}>Load More Games</button>
      </div>
      
    </>
  )
}

export default App