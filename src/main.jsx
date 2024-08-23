import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

async function fetchInitGamesArray(){
  let results = {}
  await fetch(`https://gamedealwizard.com/gdw-node/`)
  .then(data => data.json())
  .then(res => results = res)
  return results
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App initGamesData = {await fetchInitGamesArray()}/>
  // </React.StrictMode>
)
