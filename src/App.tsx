import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResult from './components/SearchResult/SearchResult'
import './App.css'

function App() {
  const [searchDev, setSearchDev] = useState('')

  return (
    <div className="bg-blue-600 flex flex-col justify-center items-center h-screen w-full">
      <div className='w-full flex justify-between'>
        <p>Devfinder</p> 
        <div>
          <span>Light</span> 
          <span>Icon</span>
        </div>
      </div>
      <SearchBar setSearchDev={setSearchDev}/>
      <SearchResult />
    </div>
  )
}

export default App
