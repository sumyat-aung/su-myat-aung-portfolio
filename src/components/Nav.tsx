import React from "react";

const Nav: React.FC = () => {
  return (
    <div className="border w-full flex justify-between px-[50px] h-[80px] items-center">
      <a href="#home">
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-square hover:fill-[#5ff4d115]"
            width="24"
            height="24"
            transform="scale(2.4) rotate(140)"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#5FF4D1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9.5" cy="9.5" r="6.5"></circle>
            <rect x="10" y="10" width="11" height="11" rx="2"></rect>
          </svg>
        </div>
      </a>
      <div className="border flex">
        <a
          href="#home"
          className="text-gray-100 font-fira pr-8 text-sm py-2 hover:text-txt"
        >
          <span className="text-txt mr-2">00.</span>
          Home
        </a>
        <a
          href="#about"
          className="text-gray-100 font-fira px-8 text-sm py-2 hover:text-txt"
        >
          <span className="text-txt mr-2">01.</span>
          About
        </a>
        <a
          href="#work"
          className="text-gray-100 font-fira px-8 text-sm py-2 hover:text-txt"
        >
          <span className="text-txt mr-2">02.</span>
          Work
        </a>
        <a
          href="#contact"
          className="text-gray-100 font-fira pl-8 text-sm py-2 hover:text-txt"
        >
          <span className="text-txt mr-2">03.</span>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
