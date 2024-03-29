import React from "react";
import { useNavigate } from "react-router-dom";
import { MiniProjects } from "../projects/projects";
import { useEffect } from "react";

// ! ^ importing ^

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center min-h-[100vh] py-10">
      <div className="xl:w-[1100px] lg:w-[800px] md:w-[620px] w-[90vw]">
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
          onClick={() => navigate("..")}
          className="feather feather-arrow-left my-5 hover:-translate-x-1 cursor-pointer transition-all"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>

        <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-fira">
          Some of the things I've worked on during my learning journey.
        </h1>
        <div className="h-[1px] w-[100%] ::after bg-gray-700 my-5"></div>

        <div className="w-full my-10 flex flex-col justify-center items-center gap-5">
          {MiniProjects.map((p) => {
            return (
              <div
                key={p?.id}
                className="hover:bg-[#22293d57] w-full sm:py-5 py-10 flex sm:flex-row flex-col justify-between items-center px-5 animate-slideup"
              >
                <h1 className="text-gray-50 text-lg lg:w-[30%] sm:w-[40%] w-full font-fira text-sm">
                  {p?.title}
                </h1>
                <p className="text-gray-400 font-fira text-xs sm:w-[18%] w-full ">
                  {p?.lang}
                </p>
                <div className="flex gap-5 sm:w-auto w-full justify-end">
                  <a
                    href={p?.code}
                    className="hover:-translate-y-[2px] transition-all"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    className="hover:-translate-y-[2px] transition-all"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
            );
          })}
        </div>
        <a
          href="https://github.com/sumyat-aung"
          target={"_blank"}
          className="font-fira text-txt text-sm w-[100%] inline-block text-right px-5 mt-10 hover:underline "
        >
           Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
