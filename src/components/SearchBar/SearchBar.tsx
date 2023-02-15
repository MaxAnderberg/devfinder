const SearchBar = (props:any) => {
return (
        <div className="flex">
            <form>
                <input className="rounded-lg p-4" type="text" placeholder="Search for a developer" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
