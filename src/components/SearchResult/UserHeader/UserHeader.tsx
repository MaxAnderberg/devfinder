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
      <div className="lg:mr-8 row-start-1 row-end-1 col-span-1 mr-[20px] md:mr-0 md:w-[117px]">
        <img
          src={props.developerResult.avatar_url}
          alt="user profile picture"
          className="md:w-[117px] w-[70px] rounded-full"
        />
      </div>
      <div className="text-left row-start-1 row-end-1 col-span-2 md:ml-[-40px]">
        <p className="font-bold md:text-2xl">{props.developerResult.name}</p>
        <p className="color-blue text-blue-600 mb-1 text-sm md:text-base">
          @{props.developerResult.login}
        </p>
        <p className="text-sm">
          Joined {formatDate(props.developerResult.created_at)}
        </p>
      </div>
      <p className="min-h-[70px] col-span-3 text-left mt-[33px]">
        {props.developerResult.bio !== null
          ? props.developerResult.bio
          : "This profile has no bio"}
      </p>
    </>
  );
};

export default UserHeader;
