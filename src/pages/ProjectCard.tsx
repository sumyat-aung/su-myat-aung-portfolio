import React from "react";
import { projectType } from "../projects/projects";

const ProjectCard = ({ p }: { key: number; p: projectType }) => {
  return (
    <div className=" my-10 w-full shadow-md relative bg-[#22293d57]">
      <a
        href={p?.url}
        className="w-full relative inline-block"
        target={"_blank"}
      >
        <img src={`${p?.img}`} alt={p?.title} className="w-full rounded" />
        <div className="w-full h-full absolute top-0 left-0 bg-[#00081b] rounded opacity-20 transition-all z-50 hover:opacity-0"></div>
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
            className="hover:-translate-y-1 transition-all"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5FF4D1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href={p?.url}
            className="hover:-translate-y-1 transition-all"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5FF4D1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
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
