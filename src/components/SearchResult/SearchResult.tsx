import { ReactComponent as Location } from "../../assets/icon-location.svg";
import { ReactComponent as Blog } from "../../assets/icon-website.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Company } from "../../assets/icon-company.svg";
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
    <div className="grid grid-cols-5 w-full bg-[#1E2A47] mt-8 rounded-xl p-8">
      <img
        src={props.developerResult.avatar_url}
        alt="puse-use-rofile picture"
        className="w-1/2 mx-auto rounded-full"
      />
      <div className="flex flex-col w-full items-center col-span-4 text-white">
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
        <div className="bg-[#141D2F] grid grid-rows-1 grid-cols-3 justify-center rounded-lg mt-8 p-6 w-full">
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
        <div className="grid grid-cols-2 gap-4 mt-6 text-left">
          <div className="flex">
            <Location className="w-6 h-6 mr-2 " />
            {props.developerResult.location !== null ? (
              <p>{props.developerResult.location}</p>
            ) : (
              <p className="text-slate-600">{notAvailable}</p>
            )}
          </div>
          <div className="flex">
            <Twitter className="h-6 w-6 mr-2" />
            {props.developerResult.twitter_username !== null ? (
              <p>{props.developerResult.twitter_username}</p>
            ) : (
              <p className="text-slate-600">{notAvailable}</p>
            )}
          </div>
          <div className="flex">
            <Blog className="w-6 h-6 mr-2" />
            {props.developerResult.blog !== null ? (
              <p>{props.developerResult.blog}</p>
            ) : (
              <p className="text-slate-600">{notAvailable}</p>
            )}
          </div>
          <div className="flex">
            <Company className="w-6 h-6 mr-2" />
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
