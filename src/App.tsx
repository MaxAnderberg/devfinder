import { useState, useCallback, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResult from './components/SearchResult/SearchResult'
import './App.css'
import LightIcon from './assets/icon-sun.svg'
import { GithubAPI } from './api/GithubAPI'

function App() {
  // const [isDarkTheme, setDarkTheme] = useState(false)
  const baseURL: string = 'https://api.github.com/users/';

  const [developer, setDeveloper] = useState([])
  const [error, setError] = useState(null)

  const  searchDeveloperHandler = useCallback(async() => {
    try {
      setError(null);
      const response = await fetch(baseURL+'maxanderberg')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      setDeveloper(data)
    } catch (error: any) {
      setError(error.message)
    }
  }, []);

  useEffect(() => {
    searchDeveloperHandler()
  }, [searchDeveloperHandler])

  return (
    <div className="flex flex-col justify-center items-center h-screen w-3/4">
      <div className='w-full flex justify-between'>
        <p className='lowercase text-white font-bold text-2xl'>Devfinder</p> 
        <div className='flex mr-4 mb-12'>
          <span className='uppercase text-white font-bold'>Light</span> 
          <img src={LightIcon} alt="" />
        </div>
      </div>
      <SearchBar setSearchDev={setDeveloper}/>
      <SearchResult developerResult={developer}/>
      <button onClick={searchDeveloperHandler}>Click me</button>
    </div>
  )
}

export default App
