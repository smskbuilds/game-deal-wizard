import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import pg from 'pg'
import './index.css'
import init_games from './init_games'

// const { Client } = pg
// const client = new Client({
//   user:"gameviry_testuser",
//   password:"JptN0.S!*{B)",
//   host:"localhost",
//   port:"5522",
//   database:"gameviry_gdw"
// })
// await client.connect()
 
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()


// const {Pool} = pg

// async function initGames(){
//   const pool = new Pool()
//   pool.on('error', (err, client) => 
//     {
//         console.error('Unexpected error on idle client', err)
//         process.exit(-1)
//     }
//   )
//   const client = await pool.connect()
//   const res = await client.query(qq)
//   client.release()
// }

// initGames()

// const qq = `SELECT games.* FROM games WHERE games.metacritic = 95`



// const client = new Client({
//   user: "gameviry_testuser",
//   database: "gameviry_gdw",
//   port: 5522,
//   host: "localhost",
//   password: "JptN0.S!*{B)",
//   ssl: false
//  });
// await client.connect()

// try {
//    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//    console.log(res.rows[0].message) // Hello world!
// } catch (err) {
//    console.error(err);
// } finally {
//    await client.end()
// }

// Query Firestore for initial array of games.

// const gamesRef = gamesCollection;
// const q = query(gamesCollection, where('metacritic', '!=', null), orderBy("metacritic", 'desc'), limit(20))
// const initGamesDataFromDb = []
// const querySnapshot = await getDocs(q);``
// querySnapshot.forEach((doc) => {
//   initGamesDataFromDb.push(doc.data())
// });
// console.log(initGamesDataFromDb)

// Fetch games data from RAWG API.

async function fetchData(){
  let results = {}
  await fetch(`https://api.rawg.io/api/games?key=d9e2c4de47634f138bae98618a84e341&page_size=40&page=40`)
  .then(data => data.json())
  .then(res => results = res)
  return results
  }

// Upload fetched data to Firestore.

async function createNewGameDatabaseEntry(rawgData) {
  if (rawgData['results']?.length>0){
    for (let step = 0; step < rawgData['results'].length; step++)
      {
        console.log(step)
        const newDealRef = await addDoc(gamesCollection,rawgData['results'][step])
    }
  }
}


// Run fetching data from RAWG & uploading to Firestore.
// (async () => {
//   const rawgAPIData = await fetchData()
//   createNewGameDatabaseEntry(rawgAPIData)
// })()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App initGamesData = {init_games}/>
  // </React.StrictMode>
)
