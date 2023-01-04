import React, { useEffect, useState } from "react";

import bar from "../assets/logo/align-right.svg";
import close from "../assets/logo/x.svg";

// ! ^ importing ^

const Nav: React.FC = () => {
  //showing nav bar on scroll up
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  useEffect(() => {
    let lastScrollTop: number = 0;
    function handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = scrollTop;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //responsive nav-bar open, close state
  const [openNav, setOpenNav] = useState<boolean>(false);

  //  disabled scrolling when the nav is open
  const toggleBodyOverflow = () => {
    document.body.style.overflow = openNav ? "hidden" : "auto";
  };
  useEffect(() => {
    toggleBodyOverflow();
  }, [openNav]);

  // close nav bar
  const closeBar = () => {
    setOpenNav(false);
  };

  return (
    <div
      className={`bg-[#191f2fe0] w-full flex justify-between px-[50px] h-[80px] items-center fixed transition-all ${scrollDirection}`}
    >
      <a href="#home" onClick={closeBar}>
        <div className="ml-4s">
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
      <div className="md:flex hidden">
        <a
          href="#about"
          className="text-gray-100 font-fira pr-8 text-sm py-2 hover:text-txt"
        >
          <span className="text-txt mr-2">00.</span>
          About
        </a>
        <a
          href="#skills"
          className="text-gray-100 font-fira px-8 text-sm py-2 hover:text-txt"
        >
          <span className="text-txt mr-2">01.</span>
          Skills
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

      <div className="md:hidden inline-block">
        {openNav ? (
          <img src={close} alt="Bar" className="w-[35px]" onClick={closeBar} />
        ) : (
          <img
            src={bar}
            alt="Bar"
            className="w-[35px]"
            onClick={() => setOpenNav(true)}
          />
        )}
      </div>

      {openNav && (
        <div className="fixed bg-[#191f2ffa] top-0 left-0 w-[100vw] h-[100vh] justify-center items-center flex flex-col -z-10">
          <div className="flex flex-col">
            <a
              href="#about"
              className="text-gray-100 font-fira px-8 text-sm py-2 hover:text-txt"
              onClick={closeBar}
            >
              <span className="text-txt mr-2">00.</span>
              About
            </a>
            <a
              href="#skills"
              className="text-gray-100 font-fira px-8 text-sm py-2 hover:text-txt"
              onClick={closeBar}
            >
              <span className="text-txt mr-2">01.</span>
              Skills
            </a>
            <a
              href="#work"
              className="text-gray-100 font-fira px-8 text-sm py-2 hover:text-txt"
              onClick={closeBar}
            >
              <span className="text-txt mr-2">02.</span>
              Work
            </a>
            <a
              href="#contact"
              className="text-gray-100 font-fira pl-8 text-sm py-2 hover:text-txt"
              onClick={closeBar}
            >
              <span className="text-txt mr-2">03.</span>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
