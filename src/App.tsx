import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css'

function App() {
  const [searchDev, setSearchDev] = useState('')

  return (
    <div className="bg-blue-600 flex flex-col justify-center">
      <SearchBar setSearchDev={setSearchDev}/>
      Hello World

    </div>
  )
}

export default App
