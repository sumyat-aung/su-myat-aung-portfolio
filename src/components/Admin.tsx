import React from "react";

const Admin: React.FC = () => {
  return (
    <a
      className="w-full text-gray-50 font-fira no-underline hover:text-txt flex items-center justify-center text-sm font-extralight cursor-default md:cursor-pointer"
      href="https://www.github.com/sumyat-aung"
      target="_blank"
    >
      Designed & built by - Su Myat Aung
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-signature ml-3"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="rgb(249 250 251)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2" />
      </svg>
    </a>
  );
};

export default Admin;
