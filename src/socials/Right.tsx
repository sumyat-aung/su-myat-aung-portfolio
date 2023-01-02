import React from "react";

import github from "../assets/social-icons/github.svg";
import linkedin from "../assets/social-icons/linkedin.svg";
import instagram from "../assets/social-icons/instagram.svg";
import twitter from "../assets/social-icons/twitter.svg";
import telegram from "../assets/social-icons/telegram.svg";

const Right: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-8 w-10 h-[360px] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-around h-[250px]">
        <a href="#" className="w-5 h-5 hover:-translate-y-1 transition-all">
          <img src={github} alt="github" />
        </a>
        <a href="#" className="w-5 h-5 hover:-translate-y-1 transition-all">
          <img src={linkedin} alt="linkedin" />
        </a>

        <a href="#" className="w-5 h-5 hover:-translate-y-1 transition-all">
          <img src={instagram} alt="instagram" />
        </a>

        <a href="#" className="w-5 h-5 hover:-translate-y-1 transition-all">
          <img src={twitter} alt="twitter" />
        </a>

        <a href="#" className="w-5 h-5 hover:-translate-y-1 transition-all">
          <img src={telegram} alt="telegram" />
        </a>
      </div>
      <div className="h-[90px] w-[1px] bg-txt2 mx-auto block ::after"></div>
    </div>
  );
};

export default Right;
