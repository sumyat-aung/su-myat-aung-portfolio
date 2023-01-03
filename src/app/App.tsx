import { useEffect, useState, useRef } from "react";

import Nav from "../components/Nav";

import Intro from "../intro/Intro";

import Left from "../socials/Left";
import Right from "../socials/Right";

import About from "../pages/About";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

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
          <div>
            <Right />
            <Left />
          </div>
          <>
            <Nav />
            <div className="mt-[80px]">
              <Home />
              <About />
              <Work />
              <Contact />
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default App;
