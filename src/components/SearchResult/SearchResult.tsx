import DummyIcon from '../../assets/react.svg'
const SearchResult = () => {
  const developer = {
    userName: "maxanderberg",
    repositories: 14,
    followers: 20,
    following: 5,
    location: "San Francisco",
    email: "test@email.com",
    twitter: "octoman",
    bio: "There was once a padawan..."
  }
  return (
    <div className="grid grid-cols-4 w-full">
      <img src={DummyIcon} alt="" className='w-1/2 m-auto'/>
      <div className="bg-[#1E2A47] flex flex-col mt-6 w-full items-center col-span-3 text-white">
        <p>{developer.userName}</p>
        {developer.bio}
        <div className="bg-[#141D2F] grid grid-rows-2 grid-cols-2 justify-center rounded-lg w-1/2">
            <p>Repos</p>
            <p>Followers</p>
            <p>Followers</p>
            <p>{developer.repositories}</p>
            <p>{developer.followers}</p>
            <p>{developer.following}</p>
        </div>
        <div>
          {developer.location}
          {developer.twitter}
          {developer.email}
        </div>
    </div>
   
    </div>
  )
}

export default SearchResult