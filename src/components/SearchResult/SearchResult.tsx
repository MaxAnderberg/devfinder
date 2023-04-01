import { ReactComponent as Location } from "../../assets/icon-location.svg";
import { ReactComponent as Blog } from "../../assets/icon-website.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Company } from "../../assets/icon-company.svg";
import { ReactSVG } from "react-svg";
import twitter from "../../assets/icon-twitter.svg";
import "./SearchResult.css";

const SearchResult = (props: any) => {
  const notAvailable = "Not Available";

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
    <div className="flex w-[730px] bg-[#1E2A47] mt-8 rounded-xl p-12">
      <div className="mr-8">
        <img
          src={props.developerResult.avatar_url}
          alt="puse-use-rofile picture"
          className="w-[117px] rounded-full"
        />
      </div>

      <div className="flex flex-col w-[480px] items-center text-white">
        <div className="flex justify-between w-full">
          <div className="text-left">
            <p className="text-bold">{props.developerResult.name}</p>
            <p className="color-blue mt-2 text-blue-600">
              @{props.developerResult.login}
            </p>
            <p className="mt-6">
              {props.developerResult.bio !== null ? (
                <p>(props.developerResult.bio)</p>
              ) : (
                <p>This profile has no bio</p>
              )}
            </p>
          </div>
          <div className="text-right">
            <p>Joined {formatDate(props.developerResult.created_at)}</p>
          </div>
        </div>
        <div className="bg-[#141D2F] grid grid-rows-1 grid-cols-3 justify-items-start rounded-lg mt-8 py-[15px] px-[32px] w-full">
          <div>
            <p>Repos</p>
            <p className="font-bold">{props.developerResult.public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p className="font-bold">{props.developerResult.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-bold">{props.developerResult.following}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-[19px] mt-6 text-left w-full">
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
          <div className="flex gap-x-[16px]">
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
          <div className="flex gap-x-[16px]">
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
          <div className="flex gap-x-[16px]">
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
  );
};

export default SearchResult;
