import SearchIcon from '../../assets/icon-search.svg'

const SearchBar = (props: any) => {
  return (
    <div className="flex justify-between bg-[#1E2A47] w-full rounded-2xl">
      <form className="flex m-2 w-1/2 ml-6">
        <img src={SearchIcon} className='m-auto' alt="a magnifyier" />
        <input className="rounded-lg ml-2 p-4 border-0  w-full placeholder-white bg-transparent" type="text" placeholder="Search GitHub username..." />
      </form>
      <button className="bg-primary-blue px-6 rounded-xl text-white m-2 font-bold">Search</button>
    </div>
  )
}

export default SearchBar;
