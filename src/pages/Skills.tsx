import React from "react";

import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";
import sass from "../assets/tech/sass.svg";
import bs from "../assets/tech/bs.svg";
import tw from "../assets/tech/tw.svg";
import sc from "../assets/tech/styledcom.svg";
import js from "../assets/tech/js.svg";
import type from "../assets/tech/type.svg";
import react from "../assets/tech/react.svg";
import framer from "../assets/tech/framer.svg";

// ! ^ importing ^

const Skills: React.FC = () => {
  return (
    <div
      className="h-[100vh] flex justify-center items-center border"
      id="skills"
    >
      <p className="text-txt mr-2 text-3xl font-semibold font-fira mb-4">
        01.{" "}
      </p>
      <div className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw] border">
        <div>
          <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-fira mt-10 mb-5">
            Skills
            <div className="h-[1px] w-[40%] ::after bg-gray-700 ml-5"></div>
          </h1>
          <div className="border flex flex-wrap gap-5">
            <div className="flex font-fira items-center text-gray-300">
              <img src={js} alt="html" className="w-[30px] mr-2" />
              JavaScript (ES6+)
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={type} alt="html" className="w-[20px] mr-2" />
              TypeScript
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={react} alt="html" className="w-[30px] mr-2" />
              React
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={html} alt="html" className="w-[30px] mr-2" />
              Html
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={css} alt="html" className="w-[30px] mr-2" />
              Css
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={sass} alt="html" className="w-[30px] mr-2" />
              Sass
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={tw} alt="html" className="w-[30px] mr-2" />
              TailwindCSS
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={bs} alt="html" className="w-[30px] mr-2" />
              Bootstrap
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={sc} alt="html" className="w-[30px] mr-2" />
              Styled Components
            </div>

            <div className="flex font-fira items-center text-gray-300">
              <img src={framer} alt="html" className="w-[30px] mr-2" />
              Framer Motion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
