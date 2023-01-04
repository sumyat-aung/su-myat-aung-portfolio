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
import redux from "../assets/tech/redux.svg";
import node from "../assets/tech/nodejs-icon.svg";

// ! ^ importing ^

const Skills: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center" id="skills">
      <div className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw]">
        <p className="text-txt mr-2 text-3xl font-semibold font-fira mb-4">
          01.{" "}
        </p>
        <div>
          <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-fira my-5">
            Skills
            <div className="h-[1px] w-[40%] ::after bg-gray-700 ml-5"></div>
          </h1>

          <>
            <h2 className="font-fira text-txt mb-2">
              Languages & framework / library{" "}
            </h2>
            <div className="h-[1px] w-[90%] bg-gray-700"></div>
            <div className="flex flex-wrap gap-5 mt-3">
              <div className="flex font-fira items-center text-gray-300">
                <img src={js} alt="html" className="w-[20px] mr-2" />
                JavaScript (ES6+)
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={type} alt="html" className="w-[20px] mr-2" />
                TypeScript
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={react} alt="html" className="w-[20px] mr-2" />
                React
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={redux} alt="html" className="w-[20px] mr-2" />
                React Redux
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={html} alt="html" className="w-[20px] mr-2" />
                Html
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={css} alt="html" className="w-[20px] mr-2" />
                Css
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={sass} alt="html" className="w-[20px] mr-2" />
                Sass
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={tw} alt="html" className="w-[20px] mr-2" />
                TailwindCSS
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={bs} alt="html" className="w-[20px] mr-2" />
                Bootstrap
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={sc} alt="html" className="w-[20px] mr-2" />
                Styled Components
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={framer} alt="html" className="w-[20px] mr-2" />
                Framer Motion
              </div>

              <div className="flex font-fira items-center text-gray-300">
                <img src={node} alt="html" className="w-[15px] mr-2" />
                NodeJS (familiar with)
              </div>
            </div>
          </>

          <>
            <h2 className="font-fira text-txt mb-2 mt-10">Tools</h2>
            <div className="h-[1px] w-[90%] bg-gray-700"></div>
            <div className="flex flex-wrap md:gap-12 gap-5 mt-3 ">
              <h1 className="font-fira text-gray-300">Git</h1>
              <h1 className="font-fira text-gray-300">Npm</h1>
              <h1 className="font-fira text-gray-300">CLI</h1>
              <h1 className="font-fira text-gray-300">Developer Tools</h1>
              <h1 className="font-fira text-gray-300">Gulp</h1>
              <h1 className="font-fira text-gray-300">Webpack</h1>
            </div>
          </>

          <>
            <h2 className="font-fira text-txt mb-2 mt-10">Platforms</h2>
            <div className="h-[1px] w-[90%] bg-gray-700"></div>
            <div className="flex flex-wrap md:gap-12 gap-5 mt-3 ">
              <h1 className="font-fira text-gray-300">GitHub</h1>
              <h1 className="font-fira text-gray-300">Visual Studio Code</h1>
              <h1 className="font-fira text-gray-300">Netlify</h1>
              <h1 className="font-fira text-gray-300">Vercel</h1>
              <h1 className="font-fira text-gray-300">Cloudflare</h1>
              <h1 className="font-fira text-gray-300">Figma</h1>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Skills;
