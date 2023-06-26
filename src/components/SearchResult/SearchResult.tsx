import  Location  from "../../assets/IconLocation";
import  Blog from "../../assets/IconBlog";
import  Twitter from "../../assets/IconTwitter";
import  Company from "../../assets/IconCompany";
import UserHeader from "./UserHeader/UserHeader";

const SearchResult = (props: any) => {
  const notAvailable = "Not Available";

  return (
    <div className="shadow-lg lg:flex bg-white dark:bg-dark-secondary mt-4 md:mt-8 rounded-xl md:p-12 p-6 w-[337px] md:w-[573px] lg:w-[730px]">
      <div
        className="grid grid-rows-3 grid-cols-1 w-full text-white"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        {/* First Section */}
        <div className="grid grid-rows-[auto,1fr] lg:grid-rows-[auto,auto] md:grid-cols-[1fr-auto] lg:grid-cols-[0.5fr,2fr,auto] lg:mb-0">
          <UserHeader developerResult={props.developerResult} />
        </div>
        {/* Second Section */}
        <div>
          <div className="md:pl-[32px] md:pb-[17px] bg-primary-gray dark:bg-dark-primary grid grid-rows-1 grid-cols-3 justify-items-start md:text-left rounded-lg py-[15px] px-[15px] w-full justify-self-center align-self-center mb-[24px] mb:w-[493px] lg:row-start-1 lg:row-end-1 lg:w-[480px] lg:ml-[162px] lg:mt-[-15px]">
            <div>
              <p className="text-xs mb-[8px] text-secondary-white dark:text-white">Repos</p>
              <p className="font-bold sm:text-center md:text-left sm:text-base md:text-[22px] text-secondary-gray dark:text-white">
                {props.developerResult.public_repos}
              </p>
            </div>
            <div>
              <p className="text-xs mb-[8px] text-secondary-gray dark:text-white">Followers</p>
              <p className="font-bold sm:text-base md:text-[22px] text-secondary-gray dark:text-white">{props.developerResult.followers}</p>
            </div>
            <div>
              <p className="text-xs mb-[8px] text-secondary-white dark:text-white">Following</p>
              <p className="font-bold sm:text-base md:text-[22px] text-secondary-gray dark:text-white">{props.developerResult.following}</p>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[19px] text-left w-full lg:row-start-1 lg:ml-[162px]">
            <div className="flex gap-x-[16px]">
              <Location
                tailWindClass={`w-[20px] ${
                  props.developerResult.location === null
                    ? "text-dark-white-secondary text-opacity-50"
                    : "text-secondary-white dark:text-white"
                }`}
              />
              {props.developerResult.location !== null ? (
                <p className="text-secondary-white dark:text-white">{props.developerResult.location}</p>
              ) : (
                <p className="text-white text-opacity-50">{notAvailable}</p>
              )}
            </div>
            <div className="flex gap-x-[16px] lg:ml-[-10px]">
              <Twitter
                tailWindClass={`w-[20px] text-white-500 ${
                  props.developerResult.twitter_username === null
                    ? "text-secondary-white text-opacity-50"
                    : "text-secondary-white dark:text-white"
                }`}
              />
              {props.developerResult.twitter_username !== null ? (
                <p className="text-secondary-white dark:text-white">{props.developerResult.twitter_username}</p>
              ) : (
                <p className="text-secondary-white text-opacity-50">{notAvailable}</p>
              )}
            </div>
            <div className="flex gap-x-[16px] ">
              <Blog
                tailWindClass={`w-[20px] ${
                  props.developerResult.blog === null
                    ? "text-secondary-white dark:text-dark-white-secondary"
                    : "text-secondary-white dark:text-white"
                }`}
              />
              {props.developerResult.blog !== null ? (
                <p className="text-secondary-white dark:text-white">{props.developerResult.blog}</p>
              ) : (
                <p className="text-secondary-white text-opacity-50 ">{notAvailable}</p>
              )}
            </div>
            <div className="flex gap-x-[16px] lg:ml-[-10px]">
              <Company
                tailWindClass={`w-[20px]  ${
                  props.developerResult.company === null
                    ? "text-dark-white-secondary"
                    : "text-secondary-white dark:text-white"
                }`}
              />
              {props.developerResult.company !== null ? (
                <p className="text-secondary-white dark:text-white">{props.developerResult.company}</p>
              ) : (
                <p className="text-secondary-white text-opacity-50">{notAvailable}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
