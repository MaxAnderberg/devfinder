import { ReactComponent as Location } from "../../assets/icon-location.svg";
import { ReactComponent as Blog } from "../../assets/icon-website.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Company } from "../../assets/icon-company.svg";
import UserHeader from "./UserHeader/UserHeader.tsx";

const SearchResult = (props: any) => {
  const notAvailable = "Not Available";

  return (
    <div className="lg:flex bg-[#1E2A47] mt-4 md:mt-8 rounded-xl md:p-12 p-6 w-[337px] md:w-[573px] lg:w-[730px]">
      <div
        className="grid grid-rows-3 grid-cols-1 w-full text-white "
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        {/* First Section */}
        <div className="grid  grid-rows-[auto,1fr] md:grid-cols-[1fr-auto] lg:grid-cols-[0.5fr,2fr,auto] lg:mb-0  ">
          <UserHeader developerResult={props.developerResult} />
        </div>
        {/* Second Section */}
        <div>
          <div className="bg-[#141D2F] grid grid-rows-1 grid-cols-3 justify-items-center rounded-lg py-[15px] px-[15px] w-full justify-self-center align-self-center mb-[24px] mb:w-[493px] lg:row-start-1 lg:row-end-1 lg:w-[480px] lg:ml-[162px] lg:mt-[-15px]">
            <div>
              <p className="text-xs mb-[8px]">Repos</p>
              <p className="font-bold text-center">
                {props.developerResult.public_repos}
              </p>
            </div>
            <div>
              <p className="text-xs mb-[8px]">Followers</p>
              <p className="font-bold">{props.developerResult.followers}</p>
            </div>
            <div>
              <p className="text-xs mb-[8px]">Following</p>
              <p className="font-bold">{props.developerResult.following}</p>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[19px] text-left w-full lg:row-start-1 lg:ml-[162px]">
            <div className="flex gap-x-[16px]">
              <Location
                className={`w-[20px] text-red-500 ${
                  props.developerResult.location === null
                    ? "text-[#697C9A]"
                    : "text-white"
                }`}
              />
              {props.developerResult.location !== null ? (
                <p>{props.developerResult.location}</p>
              ) : (
                <p className="text-white">{notAvailable}</p>
              )}
            </div>
            <div className="flex gap-x-[16px] lg:ml-[-10px]">
              <Twitter
                className={`w-[20px] text-white-500 ${
                  props.developerResult.twitter_username === null
                    ? "text-[#697C9A]"
                    : "text-white"
                }`}
              />
              {props.developerResult.twitter_username !== null ? (
                <p>{props.developerResult.twitter_username}</p>
              ) : (
                <p className="text-slate-600">{notAvailable}</p>
              )}
            </div>
            <div className="flex gap-x-[16px] ">
              <Blog
                className={`w-[20px] text-gray-500 ${
                  props.developerResult.blog === null
                    ? "text-[#697C9A]"
                    : "text-white"
                }`}
              />
              {props.developerResult.blog !== null ? (
                <p>{props.developerResult.blog}</p>
              ) : (
                <p className="text-slate-600">{notAvailable}</p>
              )}
            </div>
            <div className="flex gap-x-[16px] lg:ml-[-10px]">
              <Company
                className={`w-[20px] text-pink-500 ${
                  props.developerResult.company === null
                    ? "text-[#697C9A]"
                    : "text-white"
                }`}
              />
              {props.developerResult.company !== null ? (
                <p>{props.developerResult.company}</p>
              ) : (
                <p className="text-slate-600">{notAvailable}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
