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
    <div className="grid grid-cols-5 w-full bg-[#1E2A47] mt-8 rounded-xl p-8">
      <img src={DummyIcon} alt="" className='w-1/2 mx-auto'/>
      <div className=" flex flex-col w-full items-center col-span-4 text-white">
        <div className='flex justify-between w-full'>
          <div className='text-left'>
          <p className='text-bold'>{developer.userName}</p>
          <p className='color-blue mt-2'>@Octocat</p>
          <p className='mt-6'>{developer.bio}</p>
          </div>
          <div className='text-right'>
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="bg-[#141D2F] grid grid-rows-2 grid-cols-2 justify-center rounded-lg mt-8 p-6 w-full">
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