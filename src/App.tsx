import { useState, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";
import "./App.css";
import ThemeIcon from "./assets/IconSun";
import MoonIcon from "./assets/IconMoon";
//import { GithubAPI } from "./api/GithubAPI";
import { mockData } from "./mockdata/developer-mock.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
        return;
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-primary-gray flex justify-center dark:bg-dark-primary">
      <div className="flex flex-col md:justify-center items-start md:items-center h-screen md:w-3/6 bg-primary-blue sm:w-full">
        <div className="lg:w-[730px] flex justify-between w-[327px] md:w-[573px] mt-8">
          <p className="lowercase text-dark-accent dark:text-white font-bold text-2xl">
            Devfinder
          </p>
          <div
            className="flex text-dark-white-secondary dark:text-white mb-[36px] hover:text-button-hover cursor-pointer"
            onClick={() => handleDarkMode()}
          >
            <span className="uppercase font-bold tracking-[2.5px] mr-2 text-sm mt-1">
              {darkMode ? "Light" : "Dark"}
            </span>
            {darkMode ? (
              <ThemeIcon tailWindClass="w-6 h-6 ml-2 mt-1" />
            ) : (
              <MoonIcon tailWindClass="w-6 h-6 ml-2 mt-1" />
            )}
          </div>
        </div>
        <SearchBar setSearchDev={setDeveloper} foundSearch={foundSearch} />
        <SearchResult developerResult={developer} />
      </div>
    </div>
  );
}

export default App;
