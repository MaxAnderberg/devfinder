import SearchIcon from '../../assets/icon-search.svg'

const SearchBar = (props: any) => {
  return (
    <div className="flex justify-between bg-[#1E2A47] w-full rounded-2xl">
      <form className="flex m-2 w-1/2 ml-6">
        <img src={SearchIcon} className='m-auto' alt="a magnifyier" />
        <input className="rounded-lg ml-2 p-4 border-0 bg-transparent w-full placeholder-white" type="text" placeholder="Search GitHub username..." />
      </form>
      <button className="bg-blue-600 p-4 rounded-lg text-white m-2">Search</button>
    </div>
  )
}

export default SearchBar;
