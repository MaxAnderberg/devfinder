import { useState } from "react";
import SearchIcon from "../../assets/IconSearch";
import IconSearch from "../../assets/IconSearch";

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
    <div className="shadow-lg bg-primary-white lg:w-[730px] md:w-[573px] w-[337px] rounded-2xl dark:bg-dark-secondary">
      <form onSubmit={handleSearch} className="flex">
        <div className="m-auto ml-4 md:ml-8">
          <SearchIcon tailWindClass="text-button-blue w-[24px] h-[24px]"/>
        </div>
        <input
          className="mr-[5px] rounded-lg py-4 md:p-4 border-0 w-full dark:placeholder-white cursor-pointer dark:bg-dark-secondary dark:text-white focus:ring-0 focus:outline-none text-xs md:text-[16px] ml-2"
          type="text"
          placeholder="Search GitHub username..."
          onChange={handleInputChange}
          value={searchText}
        />
        {props.foundSearch ? (
          <p></p>
        ) : (
          <div className="flex justify-end items-center w-4/5 md:w-1/3">
            <p className="text-red-500 text-xs md:text-sm mr-[8px] md:mr-[5px] lg:mr-[24px]">No results</p>
          </div>
        )}
        <button
          type="submit"
          className="bg-button-blue h-[46px] w-[84px] md:h-[50px] md:w-[106px] rounded-xl text-white m-2 font-bold text-sm hover:bg-button-hover flex-none md:text-base"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
