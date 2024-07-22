import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { onSnapshot, addDoc } from "firebase/firestore"
import { gamesCollection } from "./firebase.js"


// Fetch games data from RAWG API

async function fetchData(){
  let results = {}
  await fetch(`https://api.rawg.io/api/games?key=d9e2c4de47634f138bae98618a84e341&page_size=40&page=1`)
  .then(data => data.json())
  .then(res => results = res)
  return results
  }

// Upload fetched data to Firestore

async function createNewGameDatabaseEntry(rawgData) {
  console.log(rawgData)
  if (rawgData['results']?.length>0){
    for (let step = 0; step < rawgData['results'].length; step++)
      {
        console.log(rawgData['results'][step])
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
    <App />
  // </React.StrictMode>
)
