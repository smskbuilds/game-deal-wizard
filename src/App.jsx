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
    subscriptionServices:
      {
        1:{'subscriptionName':'ps_plus_extra','selected':false}
      },
    genres:
      {
        1:{'genreName':'Racing','selected':false},
        2:{'genreName':'Shooter','selected':false},
        3:{'genreName':'Adventure','selected':false},
        4:{'genreName':'Action','selected':false},
        5:{'genreName':'RPG','selected':false},
        6:{'genreName':'Fighting','selected':false},
        7:{'genreName':'Puzzle','selected':false},
        10:{'genreName':'Strategy','selected':false},
        11:{'genreName':'Arcade','selected':false},
        14:{'genreName':'Simulation','selected':false},
        15:{'genreName':'Sports','selected':false},
        17:{'genreName':'Card','selected':false},
        19:{'genreName':'Family','selected':false},
        28:{'genreName':'Board Games','selected':false},
        34:{'genreName':'Educational','selected':false},
        40:{'genreName':'Casual','selected':false},
        51:{'genreName':'Indie','selected':false},
        59:{'genreName':'Massively Multiplayer','selected':false},
        83:{'genreName':'Platformer','selected':false},
      },
  page: 1
}

function App() {

  async function fetchGamesArray(filters){
    const platformFilters = []
    const subscriptionFilters = []
    const genreFilters = []
    for (const platform in filters['platforms']){
      if (filters['platforms'][platform]['selected']) platformFilters.push(Number(platform))
    }
    for (const subscription in filters['subscriptionServices']){
      if (filters['subscriptionServices'][subscription]['selected']) subscriptionFilters.push(Number(subscription))
    }
    for (const genre in filters['genres']){
      if (filters['genres'][genre]['selected']) genreFilters.push(Number(genre))
    } 
    const URL = `https://gamedealwizard.com/gdw-node/[${platformFilters}]/[${genreFilters}]/[${subscriptionFilters}]/1`
    console.log(URL)
    const response = (await fetch(URL)).json()
    return response
  }

  const [filters, setFilters] = useState(initFilters)
  const [gamesData,setGamesData] = useState([])
  const [page,setPage] = useState(1)
  const firstRender = useRef(true)
  const firstRender2 = useRef(true)

  function handlePlatformFilterChange(platformId){
    console.log('Function handle Platform Filter Change Ran')
    setFilters(prevState => ({...prevState, platforms:{...prevState.platforms, [platformId]: {...prevState['platforms'][platformId], 'selected':!prevState['platforms'][platformId]['selected']}}}))
  }

  function handleSubscriptionServiceFilterChange(ServiceId){
    console.log('Function handle Subscription Service Filter Change Ran')
    setFilters(prevState => ({...prevState, subscriptionServices:{...prevState.subscriptionServices, [ServiceId]: {...prevState['subscriptionServices'][ServiceId], 'selected':!prevState['subscriptionServices'][ServiceId]['selected']}}}))
  }

  function handleGenreFilterChange(genreId){
    console.log('Function handle Genre Filter Change Ran')
    setFilters(prevState => ({...prevState, genres:{...prevState.genres, [genreId]: {...prevState['genres'][genreId], 'selected':!prevState['genres'][genreId]['selected']}}}))
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
        <Sidebar 
          className = 'sidebar' filters = {filters} 
          handlePlatformFilterChange = {handlePlatformFilterChange}
          handleSubscriptionServiceFilterChange = {handleSubscriptionServiceFilterChange}
          handleGenreFilterChange = {handleGenreFilterChange}
        />
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