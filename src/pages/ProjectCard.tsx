import React from "react";
import { projectType } from "../projects/projects";

const ProjectCard = ({ p }: any) => {
  return (
    <div className=" my-20 w-full shadow-md border-b-gray-600 relative bg-[#111d30c7]">
      <a
        href={p?.url}
        className="w-full  relative inline-block"
        target={"_blank"}
      >
        <img src={p?.img} alt={p?.title} className="w-full rounded" />
        {/* <div className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-40 z-50 hover:opacity-0"></div> */}
      </a>
      <div className="w-full  p-5 text-gray-50">
        <h1 className="text-txt text-lg font-fira">{p?.title}</h1>
        <p className="font-inter text-gray-200 py-3">{p?.des}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
