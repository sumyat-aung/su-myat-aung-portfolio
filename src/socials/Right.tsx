import React from "react";
import { motion } from "framer-motion";

import github from "../assets/social-icons/github.svg";
import linkedin from "../assets/social-icons/linkedin.svg";
import instagram from "../assets/social-icons/instagram.svg";
import twitter from "../assets/social-icons/twitter.svg";
import skype from "../assets/social-icons/skype.svg";

// ! ^ importing ^

const Right: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="fixed bottom-0 left-8 w-10 h-[360px] flex flex-col items-center justify-between"
    >
      <div className="flex flex-col items-center justify-around h-[250px]">
        <a
          href="https://github.com/sumyat-aung"
          target={"_blank"}
          className="w-5 h-5 hover:-translate-y-1 transition-all"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumyat-aung/"
          className="w-5 h-5 hover:-translate-y-1 transition-all"
          target={"_blank"}
        >
          <img src={linkedin} alt="linkedin" />
        </a>

        <a
          href="https://www.instagram.com/sumyat_1584/"
          className="w-5 h-5 hover:-translate-y-1 transition-all"
          target={"_blank"}
        >
          <img src={instagram} alt="instagram" />
        </a>

        <a
          href="https://twitter.com/sumyat1584"
          className="w-5 h-5 hover:-translate-y-1 transition-all"
          target={"_blank"}
        >
          <img src={twitter} alt="twitter" />
        </a>

        <a
          href="https://join.skype.com/invite/oWh1zqCi6fIQ"
          className="w-5 h-5 hover:-translate-y-1 transition-all"
          target={"_blank"}
        >
          <img src={skype} alt="skype" />
        </a>
      </div>
      <div className="h-[90px] w-[1px] bg-txt2 mx-auto block ::after"></div>
    </motion.div>
  );
};

export default Right;
