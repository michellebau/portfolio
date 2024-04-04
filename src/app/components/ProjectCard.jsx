import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group"> {/* Add the group class here */}
      <div
        className="h-52 md:h-72 rounded-t-lg relative"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Use group-hover:flex instead of group-hover on individual elements */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover:text-white" />
          </Link>
        </div>
      </div>
      {/* Apply group-hover:shadow-blue-500/50 on the entire card's hover */}
      <div className="text-white rounded-b-lg bg-[#181818] py-6 px-4 shadow-lg group-hover:shadow-slate-100/50 transition-shadow duration-500">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#FFF]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
