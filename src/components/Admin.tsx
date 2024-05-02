import React from "react";

// ! ^ importing ^

const Admin: React.FC = () => {
  return (
    <a
      className="w-full text-gray-300 font-fira my-5 no-underline hover:text-txt flex items-center justify-center text-sm font-extralight cursor-default md:cursor-pointer"
      href="https://www.github.com/sumyat-aung"
      target="_blank"
    >
      Built by - Su Myat Aung
    </a>
  );
};

export default Admin;
