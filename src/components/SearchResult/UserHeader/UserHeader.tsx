const UserHeader = (props: any) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return formattedDate;
  };
  return (
    <>
      <div className="lg:flex lg:mr-0 row-start-1 row-end-1 lg:row-start-0 lg:row-end-0 lg:col-span-0 col-span-1 mr-[20px] md:mr-0 md:w-[117px]">
        <img
          src={props.developerResult.avatar_url}
          alt="user profile picture"
          className="md:w-[117px] w-[70px] rounded-full"
        />
      </div>
      <div className="text-left row-start-1 row-end-1 col-span-2 lg:col-start-2 lg:col-end-3 lg:col-span-2 md:ml-[-40px] lg: lg:ml-[37px] md:mt-5 lg:mt-0 lg:grid lg:grid-cols-2 lg:grid-rows-[0.5fr,0.25fr]">
        <p className="text-[#2B3442] dark:text-white font-bold md:text-2xl mb-2 lg:mt-2 ">
          {props.developerResult.name}
        </p>
        <p className="color-blue text-blue-600 mb-1 text-sm md:text-base lg:row-start-2 lg:row-end-2 lg:mt-[0px]">
          @{props.developerResult.login}
        </p>
        <p className="text-[#697C9A] dark:text-white text-sm md:text-base lg:mb-2 lg:mt-2 justify-self-end">
          Joined {formatDate(props.developerResult.created_at)}
        </p>
      </div>
      <p className={`min-h-[70px] 4ol-span-3 lg:col-span-1 lg:row-start-3 lg:row-end-3 lg:col-start-2 lg:col-end-3 text-left mt-[33px] lg:mt-[0px] lg:ml-[37px] lg:mt-[-28px] ${props.developerResult.bio === null ? "text-[#4B6A9B] dark:text-[#697C9A] text-opacity-75" : "text-[#4B6A9B] dark:text-white"}`}>
        {props.developerResult.bio !== null
          ? props.developerResult.bio
          : "This profile has no bio"}
      </p>
    </>
  );
};

export default UserHeader;
