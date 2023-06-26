export default function UserStatistics(props: { developerResult: any }):JSX.Element {
  return <div
    className="md:pl-[32px] md:pb-[17px] bg-primary-gray dark:bg-dark-primary grid grid-rows-1 grid-cols-3 justify-items-start md:text-left rounded-lg py-[15px] px-[15px] w-full justify-self-center align-self-center mb-[24px] mb:w-[493px] lg:row-start-1 lg:row-end-1 lg:w-[480px] lg:ml-[162px] lg:mt-[-15px]">
    <div>
      <p className="text-xs mb-[8px] text-secondary-white dark:text-white">Repos</p>
      <p
        className="font-bold sm:text-center md:text-left sm:text-base md:text-[22px] text-secondary-gray dark:text-white">
        {props.developerResult.public_repos}
      </p>
    </div>
    <div>
      <p className="text-xs mb-[8px] text-secondary-gray dark:text-white">Followers</p>
      <p
        className="font-bold sm:text-base md:text-[22px] text-secondary-gray dark:text-white">{props.developerResult.followers}</p>
    </div>
    <div>
      <p className="text-xs mb-[8px] text-secondary-white dark:text-white">Following</p>
      <p
        className="font-bold sm:text-base md:text-[22px] text-secondary-gray dark:text-white">{props.developerResult.following}</p>
    </div>
  </div>;
}
