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
    <div className="bg-slate-100 flex flex-col mt-6">
      <p>{developer.userName}</p>
      {developer.bio}
      <div className="bg-slate-200 grid grid-rows-2 grid-cols-2 justify-center rounded-lg">
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
  )
}

export default SearchResult