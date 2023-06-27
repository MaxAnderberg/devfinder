import Location from "../../assets/IconLocation";
import Twitter from "../../assets/IconTwitter";
import Blog from "../../assets/IconBlog";
import Company from "../../assets/IconCompany";

export default function UserLinks(props: { developerResult: any }) {
  const notAvailable = "Not Available";
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[19px] text-left w-full lg:row-start-1 lg:ml-[162px] max-w-[480px]">
    <div className="flex gap-x-[6px]">
      <Location
        tailWindClass={`w-[30px] ${
          props.developerResult.location === null
            ? "text-dark-white-secondary text-opacity-50"
            : "text-secondary-white dark:text-white"
        }`}
      />
      {props.developerResult.location !== null ? (
        <p className="text-secondary-white dark:text-white text-sm break-all">{props.developerResult.location}</p>
      ) : (
        <p className="text-white text-opacity-50 text-sm">{notAvailable}</p>
      )}
    </div>
    <div className="flex gap-x-[6px] md:ml-[10px]">
      <Twitter
        tailWindClass={`w-[30px] text-white-500 md:ml-[15px] ${
          props.developerResult.twitter_username === null
            ? "text-secondary-white text-opacity-50"
            : "text-secondary-white dark:text-white"
        }`}
      />
      {props.developerResult.twitter_username !== null ? (
        <p className="text-secondary-white dark:text-white text-sm break-all">{props.developerResult.twitter_username}</p>
      ) : (
        <p className="text-secondary-white text-opacity-50 text-sm">{notAvailable}</p>
      )}
    </div>
    <div className="flex gap-x-[6px]">
      <Blog
        tailWindClass={`w-[30px] ${
          props.developerResult.blog === null
            ? "text-secondary-white dark:text-dark-white-secondary"
            : "text-secondary-white dark:text-white"
        }`}
      />
      {props.developerResult.blog !== null ? (
        <p className="max-w-[210px] text-secondary-white dark:text-white text-sm break-all">{props.developerResult.blog}</p>
      ) : (
        <p className="text-secondary-white text-opacity-50 text-sm">{notAvailable}</p>
      )}
    </div>
    <div className="flex gap-x-[6px] md:ml-[10px]">
      <Company
        tailWindClass={`w-[30px] md:ml-[15px] ${
          props.developerResult.company === null
            ? "text-dark-white-secondary"
            : "text-secondary-white dark:text-white"
        }`}
      />
      {props.developerResult.company !== null ? (
        <p className="text-secondary-white dark:text-white text-sm break-all">{props.developerResult.company}</p>
      ) : (
        <p className="text-secondary-white text-opacity-50 text-sm">{notAvailable}</p>
      )}
    </div>
  </div>;
}