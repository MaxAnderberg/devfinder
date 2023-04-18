import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

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
    <div className="bg-[#1E2A47] md:w-[730px] w-[337px] rounded-2xl">
      <form onSubmit={handleSearch} className="flex">
        <div className="m-auto ml-4 md:ml-8">
          <SearchIcon
            src={SearchIcon}
            className=" text-[#0079FF] w-[24px] h-[24px]"
          />
        </div>
        <input
          className="rounded-lg py-4 md:p-4 border-0 w-full placeholder-white bg-[#1E2A47] text-white focus:ring-0 focus:outline-none text-xs ml-2"
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
          className="bg-button-blue h-[64px] w-[84px] rounded-xl text-white m-2 font-bold hover:bg-button-hover flex-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
