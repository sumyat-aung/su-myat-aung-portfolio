import React from "react";

const Left: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-8 w-10 h-[360px] flex flex-col items-center justify-between">
      <a
        href="mailto: sumyataung1584@gmail.com"
        className="text-txt2 font-fira vertical-rl tracking-widest inline-block text-sm"
      >
        sumyataung1584@gmail.com
      </a>
      <div className="h-[90px] w-[1px] bg-txt2 mx-auto block ::after"></div>
    </div>
  );
};

export default Left;
