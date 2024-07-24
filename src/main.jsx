import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { onSnapshot, addDoc, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore"
import { dealsCollection, gamesCollection } from "./firebase.js"


const gamesRef = gamesCollection;
const q = query(gamesCollection, where('metacritic', '!=', null), orderBy("metacritic", 'desc'), limit(20))
const initGamesDataFromDb = []
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  initGamesDataFromDb.push(doc.data())
});

// Fetch games data from RAWG API

async function fetchData(){
  let results = {}
  await fetch(`https://api.rawg.io/api/games?key=d9e2c4de47634f138bae98618a84e341&page_size=40&page=30`)
  .then(data => data.json())
  .then(res => results = res)
  return results
  }

// Upload fetched data to Firestore

async function createNewGameDatabaseEntry(rawgData) {
  if (rawgData['results']?.length>0){
    for (let step = 0; step < rawgData['results'].length; step++)
      {
        console.log(step)
        const newDealRef = await addDoc(gamesCollection,rawgData['results'][step])
    }
  }
}

// (async () => {
//   const rawgAPIData = await fetchData()
//   createNewGameDatabaseEntry(rawgAPIData)
// })()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App initGamesData = {initGamesDataFromDb}/>
  // </React.StrictMode>
)
