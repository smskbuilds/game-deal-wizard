import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { initFilters, initGames } from './init';

function App() {
    async function fetchGamesArray(filters) {
        const platformFilters = [];
        const subscriptionFilters = [1];
        const genreFilters = [];
        let searchFilters = '';
        if (filters['searchResults'].length >= 3) {
            searchFilters = filters['searchResults'];
        } else {
            searchFilters = '[]';
        }
        for (const platform in filters['platforms']) {
            if (filters['platforms'][platform]['selected'])
                platformFilters.push(Number(platform));
        }
        for (const subscription in filters['subscriptionServices']) {
            if (filters['subscriptionServices'][subscription]['selected'])
                subscriptionFilters.push(Number(subscription));
        }
        for (const genre in filters['genres']) {
            if (filters['genres'][genre]['selected'])
                genreFilters.push(Number(genre));
        }
        const URL = `https://gamedealwizard.com/gdw-node/[${platformFilters}]/[${genreFilters}]/[${subscriptionFilters}]/${filters['page']}/${searchFilters}`;
        console.log(URL);
        const response = (await fetch(URL)).json();
        return response;
    }

    const [filters, setFilters] = useState(initFilters);
    const [gamesData, setGamesData] = useState([]);
    const firstRender = useRef(true);

    function handleSearchChange(searchResults) {
        setFilters((prevState) => ({
            ...prevState,
            searchResults: searchResults,
        }));
    }

    function handlePlatformFilterChange(platformId) {
        // console.log('Function handle Platform Filter Change Ran');
        setFilters((prevState) => ({
            ...prevState,
            page: 1,
            platforms: {
                ...prevState.platforms,
                [platformId]: {
                    ...prevState['platforms'][platformId],
                    selected: !prevState['platforms'][platformId]['selected'],
                },
            },
        }));
    }

    function handleSubscriptionServiceFilterChange(ServiceId) {
        // console.log('Function handle Subscription Service Filter Change Ran');
        setFilters((prevState) => ({
            ...prevState,
            page: 1,
            subscriptionServices: {
                ...prevState.subscriptionServices,
                [ServiceId]: {
                    ...prevState['subscriptionServices'][ServiceId],
                    selected:
                        !prevState['subscriptionServices'][ServiceId][
                            'selected'
                        ],
                },
            },
        }));
    }

    function handleGenreFilterChange(genreId) {
        // console.log('Function handle Genre Filter Change Ran');
        setFilters((prevState) => ({
            ...prevState,
            page: 1,
            genres: {
                ...prevState.genres,
                [genreId]: {
                    ...prevState['genres'][genreId],
                    selected: !prevState['genres'][genreId]['selected'],
                },
            },
        }));
    }

    function handlePageChange() {
        setFilters((prevState) => ({
            ...prevState,
            page: ++prevState['page'],
        }));
    }

    useEffect(() => {
        async function initFetchGames() {
            const initGames = await fetchGamesArray(filters);
            setGamesData(initGames);
        }
        initFetchGames();
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            // console.log('Within the filters useEffect');
            fetchGamesArray(filters).then((results) => setGamesData(results));
            // console.log(filters);
        }
    }, [filters]);

    return (
        <>
            <Navbar filters={filters} handleSearchChange={handleSearchChange} />
            <div className='main'>
                <div className='main-content'>
                    <Cards gamesArray={gamesData} />
                    <div className='load-more-container'>
                        <button
                            className='load-more-button'
                            onClick={handlePageChange}>
                            Load More Games
                        </button>
                    </div>
                </div>
                <Sidebar
                    filters={filters}
                    handlePlatformFilterChange={handlePlatformFilterChange}
                    handleSubscriptionServiceFilterChange={
                        handleSubscriptionServiceFilterChange
                    }
                    handleGenreFilterChange={handleGenreFilterChange}
                />
            </div>
        </>
    );
}

export default App;
