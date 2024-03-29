import { useState, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";
import "./App.css";
import ThemeIcon from "./assets/IconSun";
import MoonIcon from "./assets/IconMoon";
import { mockData } from "./mockdata/developer-mock";
import DeveloperData from "./types";

function App() {


  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [foundSearch, setHasSearch] = useState<boolean>(true);

  const baseURL: string = "https://api.github.com/users/";

  const [developer, setDeveloper] = useState<DeveloperData>(mockData);
  const [searchInput, setSearchInput] = useState<string>('OctoCat');

  const [errorMessage, setError] = useState<string|null>(null);

  const useMock = false;

  const searchDeveloperHandler = useCallback(async () => {
    try {
      setError(null);
      if (searchInput.length === 0) {
        setHasSearch(false);
        throw new Error("Please enter a valid username");
      }

      if (useMock) {
        setDeveloper(mockData);
        return;
      }

      const response = await fetch(baseURL + searchInput);
      if (!response.ok) {
        throw new Error(`Request failed with status code: ${response.status}`);
      }

      const data = await response.json() as DeveloperData;
      setDeveloper(data);
      setHasSearch(true);
    } catch (error: any) {
      setHasSearch(false)
      setError(error.message);
    }
  }, [searchInput]);

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

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };


  return (
    <div className="bg-primary-gray flex justify-center dark:bg-dark-primary">
      <div className="flex flex-col md:justify-center items-start md:items-center h-screen md:w-3/6 bg-primary-blue">
        <div className="lg:w-[730px] flex justify-between w-[327px] md:w-[573px] mt-8">
          <p className="lowercase text-dark-accent dark:text-white font-bold text-2xl">
            Devfinder
          </p>
          <div
            className="flex text-dark-white-secondary dark:text-white mb-[36px] hover:text-button-hover dark:hover:text-button-hover cursor-pointer transform translateZ(0) "
            onClick={() => toggleDarkMode()}
          >
            <span className="uppercase font-bold tracking-[2.5px] mr-2 text-sm mt-1 transition-colors duration-75 will-change-transform">
              {darkMode ? "Light" : "Dark"}
            </span>
            {darkMode ? (
              <ThemeIcon tailWindClass="w-6 h-6 ml-2 mt-1 transition-colors duration-75 will-change-transform" />
            ) : (
              <MoonIcon tailWindClass="w-6 h-6 ml-2 mt-1 transition-colors duration-75 will-change-transform" />
            )}
          </div>
        </div>
        <SearchBar setSearchDev={setSearchInput} foundSearch={foundSearch} />
        <SearchResult developerResult={developer} />
      </div>
    </div>
  );
}

export default App;
