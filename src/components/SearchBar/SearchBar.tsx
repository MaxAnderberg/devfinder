import { useState } from "react";
import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props: any) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    const cleanedSearchText = searchText.trim();
    props.setSearchDev(cleanedSearchText);
    setSearchText("");
  };

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex justify-between bg-[#1E2A47] w-full rounded-2xl">
      <form
        onSubmit={handleSearch}
        className="flex flex-row items-center justify-between ml-6 w-full"
      >
        <img src={SearchIcon} className="m-auto" alt="a magnifyier" />
        <input
          className="rounded-lg ml-2 p-4 border-0  w-full placeholder-white bg-[#1E2A47] text-white focus:ring-0 focus:outline-none"
          type="text"
          placeholder="Search GitHub username..."
          onChange={handleInputChange}
          value={searchText}
        />
        {props.foundSearch ? (
          <p></p>
        ) : (
          <div className="flex justify-end items-center w-1/3">
            <p className="text-red-500">No results</p>
          </div>
        )}
        <button
          type="submit"
          className="bg-button-blue px-6 py-3 rounded-xl text-white m-2 font-bold hover:bg-button-hover"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
