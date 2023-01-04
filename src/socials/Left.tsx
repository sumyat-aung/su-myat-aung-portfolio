import React from "react";

import { motion } from "framer-motion";

// ! ^ importing ^

const Left: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="fixed bottom-0 right-8 w-10 h-[360px] flex flex-col items-center justify-between "
    >
      <a
        href="mailto: sumyataung1584@gmail.com"
        className="text-txt2 font-fira vertical-rl tracking-widest inline-block text-sm hover:-translate-y-1 transition-all"
      >
        sumyataung1584@gmail.com
      </a>
      <div className="h-[90px] w-[1px] bg-txt2 mx-auto block ::after"></div>
    </motion.div>
  );
};

export default Left;
