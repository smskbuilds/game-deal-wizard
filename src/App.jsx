import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Cards from "./components/Cards/Cards"
import Sidebar from './components/Sidebar'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

const initFilters = {
  platforms: 
      {
          1:{'platformName':'PC','selected':false},
          2:{'platformName':'PlayStation','selected':false},
          3:{'platformName':'Xbox','selected':false},
          4:{'platformName':'iOS','selected':false},
          5:{'platformName':'Mac','selected':false},
          6:{'platformName':'Linux','selected':false},
          7:{'platformName':'Nintendo','selected':false},
          8:{'platformName':'Android','selected':false}
      },
  page: 1
}

function App() {

  async function fetchGamesArray(filters){
    const platformFilters = []
    for (const platform in filters['platforms']){
      if (filters['platforms'][platform]['selected']) platformFilters.push(Number(platform))
    }
    let URL = ``
    if (platformFilters.length == 0) URL = `https://gamedealwizard.com/gdw-node/[]/1`
    else URL = `https://gamedealwizard.com/gdw-node/[${platformFilters}]/1`
    console.log(URL)
    const response = (await fetch(URL)).json()
    return response
  }

  const [filters, setFilters] = useState(initFilters)
  const [gamesData,setGamesData] = useState([])
  const [page,setPage] = useState(1)
  const firstRender = useRef(true)
  const firstRender2 = useRef(true)

  function handleChange(platform){
    console.log('handle Change Ran')
    setFilters(prevState => ({...prevState, platforms:{...prevState.platforms, [platform]: {...prevState['platforms'][platform], 'selected':!prevState['platforms'][platform]['selected']}}}))
  }

  function paginate() {
    setPage(prevPage => ++prevPage)
  } 

  useEffect(() => 
    {
      async function initFetchGames(){
        const initGames = await fetchGamesArray(filters)
        setGamesData(initGames)
      }
        initFetchGames()
    },
    []
  )

  useEffect(() =>{
    if (firstRender2.current){
      firstRender2.current = false
    } 
    else {
      console.log('Within the Update Page useEffect')
      fetchGamesArray(page)
      .then(results => setGamesData(prevGames => prevGames.concat(results)))
    }
  },[filters['page']])

  useEffect(() => 
    {
      if (firstRender.current){
        firstRender.current = false
      } 
      else {
        console.log('Within the filters useEffect')
        fetchGamesArray(filters)
        .then(results => setGamesData(results))
        console.log(filters)
      }
    },
    [filters]
  )

  return (
    <>
      <Navbar/>
      <div className='main'>
        <Sidebar className = 'sidebar' filters = {filters} handleChange={handleChange}/>
        <div>
          <Cards gamesArray = {gamesData}/>
          <div className = 'load-more--container'>
            <button onClick = {paginate}>Load More Games</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App