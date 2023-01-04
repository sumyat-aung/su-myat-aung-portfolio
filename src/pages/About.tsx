import React from "react";
import banner from "../assets/image/banner.png";

const About: React.FC = () => {
  return (
    <div id="about" className="flex justify-center items-center min-h-[100vh]">
      <div className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw]">
        <p className="text-txt mr-2 text-3xl font-semibold font-fira mb-4">
          00.{" "}
        </p>
        <div>
          <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-fira">
            About me
            <div className="h-[1px] w-[40%] ::after bg-gray-700 ml-5"></div>
          </h1>
          <p className="text-[#d1d3d6be] mt-5 font-inter ">
            <article className="my-3">
              Hello! My name is{" "}
              <span className="text-txt font-fira"> Su Myat Aung</span> and I
              enjoy coding things. My passion for web development began when I
              first learned to code with
              <span className="text-txt font-fira"> an Arduino kit</span>. As I
              explored the world of technology, I discovered{" "}
              <span className="text-txt font-fira">web development</span> and
              was captivated by the creativity and innovation involved in
              building online experiences.
            </article>
            <article className="my-3">
              Fast-forward to today, and I have had the opportunity to work
              alongside proficient back-end developers and full-stack developers
              on the construction of real-world applications.
            </article>
            <article className="my-3">
              In my free time, you can find me obsessively refreshing my web
              browser to see if my latest code changes have broken anything.
              <span className="text-txt font-fira">
                {"  "}
                (spoiler alert: they usually have)
              </span>
            </article>
          </p>
        </div>
        <img src={banner} alt="banner" className="mt-8 shadow opacity-30" />
      </div>
    </div>
  );
};

export default About;
