import React from "react";
import { motion } from "framer-motion";

import github from "../assets/social-icons/github.svg";
import linkedin from "../assets/social-icons/linkedin.svg";
import instagram from "../assets/social-icons/instagram.svg";
import twitter from "../assets/social-icons/twitter.svg";
import skype from "../assets/social-icons/skype.svg";
import Admin from "../components/Admin";

// ! ^ importing ^

const Contact: React.FC = () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col justify-center items-center  sm:py-0 py-[50px]"
      id="contact"
    >
      <motion.div
        className="mx-0 my-auto lg:w-[800px] md:w-[620px] w-[90vw] text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-txt mr-2 text-3xl font-semibold font-fira mb-4">
          03.{" "}
        </p>
        <div>
          <h1 className="text-gray-300 font-semibold flex flex-col items-center text-2xl font-fira my-5">
            Get in touch!
            <div className="h-[1px] w-[70%] bg-gray-700 ml-5 my-3"></div>
          </h1>
        </div>
        <div className="font-inter text-gray-400 text-lg">
          <h1>Thanks for checking in.</h1>
          <p>
            I'm currently looking for new opportunities to work with talented
            people and companies. I'm highly adaptable and always willing to
            learn new technologies as required by the company.
          </p>

          <p className="mb-24">
            If you think I might be a good fit for your team or you just want to
            learn more about what I do, don't hesitate to reach out via email at
            <a
              href="mailto: sumyataung1584@gmail.com"
              className="text-txt font-fira hover:-translate-y-[2px] transition-all mx-3 inline-block"
            >
              sumyataung1584@gmail.com
            </a>
            or anywhere you feel comfortable to contact.
          </p>

          <div className="md:hidden flex flex-col justify-between  items-center">
            <div className="flex  items-center justify-center gap-10 w-full my-10">
              <a
                href="https://github.com/sumyat-aung"
                className="w-5 h-5 hover:-translate-y-1 transition-all"
                target={"_blank"}
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
          </div>
        </div>
      </motion.div>
      <Admin />
    </div>
  );
};

export default Contact;
