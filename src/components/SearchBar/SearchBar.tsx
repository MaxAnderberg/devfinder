import SearchIcon from '../../assets/icon-search.svg'

const SearchBar = (props:any) => {
return (
        <div className="flex justify-between bg-[#1E2A47] w-full rounded-lg">
            <form className="flex m-2">
                <img src={SearchIcon} className='m-2' alt="a magnifyier" />
                <input className="rounded-lg p-4 border-0 bg-transparent" type="text" placeholder="Search for a developer" />
            </form>
            <button className="bg-blue-600 p-4 rounded-lg text-white m-2">Search</button>
        </div>
    )
}

export default SearchBar;
