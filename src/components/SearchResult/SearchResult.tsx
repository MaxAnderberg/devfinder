import UserHeader from "./UserHeader/UserHeader";
import UserStatistics from "./UserStatistics";
import UserLinks from "./UserLinks";
const SearchResult = (props: any) => {

  return (
    <div
      className="shadow-lg lg:flex bg-white dark:bg-dark-secondary mt-4 md:mt-8 rounded-xl md:p-12 p-6 w-[337px] md:w-[573px] lg:w-[730px]">
      <div
        className="grid grid-rows-3 grid-cols-1 w-full text-white"
        style={{gridTemplateRows: "auto 1fr auto"}}
      >
        <div
          className="grid grid-rows-[auto,1fr] lg:grid-rows-[auto,auto] md:grid-cols-[1fr-auto] lg:grid-cols-[0.5fr,2fr,auto] lg:mb-0">
          <UserHeader developerResult={props.developerResult}/>
        </div>
        <div>
          <UserStatistics developerResult={props.developerResult}/>
        </div>
        <div>
          <UserLinks developerResult={props.developerResult}/>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
