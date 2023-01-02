import React from "react";
import "../css/style.css";

const Intro = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-bg flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-circle-square"
        width="24"
        height="24"
        transform="scale(4) rotate(140)"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#BDE4E6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9.5" cy="9.5" r="6.5" className="svg-elem-2"></circle>
        <rect
          x="10"
          y="10"
          width="11"
          height="11"
          rx="2"
          className="svg-elem-3"
        ></rect>
      </svg>
    </div>
  );
};

export default Intro;
