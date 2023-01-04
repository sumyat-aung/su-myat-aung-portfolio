import { useEffect, useState } from "react";

import Intro from "../intro/Intro";

import Left from "../socials/Left";
import Right from "../socials/Right";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import About from "../pages/About";

// ! ^ importing ^

const App: React.FC = () => {
  // Intro showing for 3s
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    setIntro(true);
    setTimeout(() => setIntro(false), 3000);
  }, []);


  return (
    <>
      {intro ? (
        <Intro />
      ) : (
        <div>
          <div className="hidden md:block relative z-50">
            <Right />
            <Left />
          </div>
          <>
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
          </>
        </div>
      )}
    </>
  );
};

export default App;
