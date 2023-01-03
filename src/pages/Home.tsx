import React from "react";
import Nav from "../components/Nav";

// ! ^ importing ^

const Home: React.FC = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center" id="home">
      <Nav />
      <div className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw]">
        <p className="text-txt font-fira "> Hi, my name is, </p>
        <h4 className="lg:text-7xl sm:text-5xl text-3xl font-bold text-gray-300">
          Su Myat Aung.
        </h4>
        <h4 className="lg:text-7xl sm:text-5xl text-3xl font-bold text-gray-400">
          I create and manage the web.
        </h4>
        <p className="font-inter text-gray-300 mt-8">
          I'm a software engineer specializing in{" "}
          <span className="text-txt font-fira "> frontend development.</span> I
          am proficient in designing and implementing complex features for
          websites and web applications, which allows me to create solutions
          that are efficient, scalable, user-friendly, and easy to maintain.
          Currently, I am expanding my skillset to include{" "}
          <span className="text-txt font-fira "> backend development </span>{" "}
          using Node.js.
        </p>
        <a
          href="#"
          className="font-fira text-txt border border-txt hover:bg-[#5ff4d11a] mt-10 py-3 px-10 rounded-md inline-block"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
