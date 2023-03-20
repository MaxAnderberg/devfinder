import { useState, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";
import "./App.css";
import LightIcon from "./assets/icon-sun.svg";
import { GithubAPI } from "./api/GithubAPI";

function App() {
  // const [isDarkTheme, setDarkTheme] = useState(false)
  const [foundSearch, setHasSearch] = useState(true);

  const baseURL: string = "https://api.github.com/users/";

  const [developer, setDeveloper] = useState("");
  const [error, setError] = useState(null);

  const searchDeveloperHandler = useCallback(async () => {
    try {
      setError(null);
      if (developer.length === 0) {
        setHasSearch(false);
        return;
      }
      const response = await fetch(baseURL + developer);
      if (!response.ok) {
        setHasSearch(false);
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setDeveloper(data);
      setHasSearch(true);
    } catch (error: any) {
      setError(error.message);
    }
  }, [developer]);

  useEffect(() => {
    searchDeveloperHandler();
  }, [searchDeveloperHandler]);

  return (
    <div className="bg-primary-blue flex justify-center max-w-screen">
      <div className="flex flex-col justify-center items-center h-screen w-4/6 bg-primary-blue max-w-screen">
        <div className="w-full flex justify-between">
          <p className="lowercase text-white font-bold text-2xl">Devfinder</p>
          <div className="flex mr-4 mb-12">
            <span className="uppercase text-white font-bold">Light</span>
            <img src={LightIcon} alt="" />
          </div>
        </div>
        <SearchBar setSearchDev={setDeveloper} foundSearch={foundSearch} />
        <SearchResult developerResult={developer} />
        <button onClick={searchDeveloperHandler}>Click me</button>
      </div>
    </div>
  );
}

export default App;
