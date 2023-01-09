import React from "react";
import { Link } from "react-router-dom";

import { project, projectType } from "../projects/projects";
import ProjectCard from "./ProjectCard";

// ! ^ importing ^

const Work: React.FC = () => {
  return (
    <div
      className="flex justify-center min-h-[100vh] sm:pb-0 pb-[50px]"
      id="work"
    >
      <div className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw] mt-20">
        <p className="text-txt mr-2 text-3xl font-semibold font-fira mb-4">
          02.{" "}
        </p>
        <div>
          <h1 className="text-gray-300 font-semibold flex items-center text-lg sm:text-2xl font-fira my-5">
            Featured Projects
            <div className="h-[1px] w-[20%] sm:w-[40%] ::after bg-gray-700 ml-5"></div>
          </h1>
        </div>
        <div className="w-full flex flex-col">
          {project.map((p: projectType) => {
            return <ProjectCard key={p?.id} p={p} />;
          })}
        </div>
        <div className="w-full flex justify-center">
          <Link
            to={"/projects"}
            className=" font-fira text-txt border border-txt hover:bg-[#5ff4d11a] mt-10 py-3 px-10 rounded-md inline-block"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
