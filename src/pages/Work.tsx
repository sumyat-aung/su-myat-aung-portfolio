import React from "react";

// ! ^ importing ^

const Work: React.FC = () => {
  return (
    <div className="flex justify-center min-h-[100vh] border" id="work">
      <div className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw] mt-20 border">
        <p className="text-txt mr-2 text-3xl font-semibold font-fira mb-4">
          02.{" "}
        </p>
        <div>
          <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-fira my-5">
            Projects
            <div className="h-[1px] w-[40%] ::after bg-gray-700 ml-5"></div>
          </h1>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default Work;
