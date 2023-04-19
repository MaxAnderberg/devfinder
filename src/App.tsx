import { useState, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";
import "./App.css";
import { ReactComponent as ThemeIcon } from "./assets/icon-sun.svg";
import { GithubAPI } from "./api/GithubAPI";
import { mockData } from "./mockdata/developer-mock.js";

function App() {
  // const [isDarkTheme, setDarkTheme] = useState(false)
  const [foundSearch, setHasSearch] = useState(true);

  const baseURL: string = "https://api.github.com/users/";

  const [developer, setDeveloper] = useState(mockData);
  const [error, setError] = useState(null);

  const useMock = true;

  const searchDeveloperHandler = useCallback(async () => {
    try {
      setError(null);
      if (developer.length === 0) {
        setHasSearch(false);
        throw new Error("Please enter a valid username");
      }

      if (useMock) {
        setDeveloper(mockData);
        retrun;
      }

      const response = await fetch(baseURL + developer);
      if (!response.ok) {
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
    <div className="bg-primary-blue flex justify-center">
      <div className="flex flex-col md:justify-center items-start md:items-center h-screen md:w-3/6 bg-primary-blue sm:w-full">
        <div className="lg:w-[730px] flex justify-between w-[327px] md:w-[573px] md:bg-blue-500 mt-8">
          <p className="lowercase text-white font-bold text-2xl">Devfinder</p>
          <div className="flex mb-12 text-white hover:text-[#90A4D4] cursor-pointer">
            <span className="uppercase font-bold tracking-[2.5px] mr-2 text-sm mt-1">
              Light
            </span>
            <ThemeIcon className="w-6 h-6 ml-2 mt-1" />
          </div>
        </div>
        <SearchBar setSearchDev={setDeveloper} foundSearch={foundSearch} />
        <SearchResult developerResult={developer} />
      </div>
    </div>
  );
}

export default App;
