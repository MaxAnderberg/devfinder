import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResult from './components/SearchResult/SearchResult'
import './App.css'
import LightIcon from './assets/icon-sun.svg'

function App() {
  const [searchDev, setSearchDev] = useState('')
  // const [isDarkTheme, setDarkTheme] = useState(false)

  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center h-screen w-3/4">
      <div className='w-full flex justify-between'>
        <p className='lowercase text-white font-bold text-2xl'>Devfinder</p> 
        <div className='flex'>
          <img src={LightIcon} alt="" />
          <span className='uppercase text-white font-bold'>Light</span> 
        </div>
      </div>
      <SearchBar setSearchDev={setSearchDev}/>
      <SearchResult />
    </div>
  )
}

export default App
