import React from "react";
import { Icon } from "@iconify/react";
import { projectType } from "../projects/projects";

// ! ^ importing ^

const ProjectCard = ({ p }: { key: number; p: projectType }) => {
  return (
    <div className=" my-10 w-full shadow-md relative bg-[#22293d57] animate-slideup">
      <a
        href={p?.url}
        className="w-full relative inline-block group"
        target={"_blank"}
      >
        <img src={`${p?.img}`} alt={p?.title} className="w-full rounded" />
        <div className="w-full h-full absolute top-0 left-0 bg-[#00081b] rounded opacity-20 transition-all z-10 group-hover:opacity-0 group-focus:opacity-0"></div>
      </a>
      <div className="w-full  p-5 text-gray-50">
        <a
          href={p?.url}
          target={"_blank"}
          className="text-txt text-lg font-fira hover:opacity-80 transition-all"
        >
          {p?.title}
        </a>
        <p className="font-inter text-gray-300 pt-3 pb-5">{p?.des}</p>

        <div className="flex font-fira text-sm gap-8 text-gray-400 flex-wrap justify-between py-5 border-b  border-b-gray-800">
          {p?.lang?.map((l, i) => {
            return (
              <h1 className="" key={i}>
                {l}
              </h1>
            );
          })}
        </div>

        <div className="mt-6 mb-3 flex justify-end gap-10 items-center">
          <a
            href={p?.code}
            target={"_blank"}
            className="group"
          >
            <Icon icon='lucide:github' className="text-txt2 group-hover:text-txt group-focus:text-txt" height={24} width={24}/>
          </a>

          <a
            href={p?.url}
            className="group"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-txt2 group-hover:stroke-txt group-focus:stroke-txt transition-all"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
