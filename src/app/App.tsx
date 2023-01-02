import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "../components/Nav";

import Intro from "../intro/Intro";

import Left from "../socials/Left";
import Right from "../socials/Right";

import About from "../pages/About";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Contant from "../pages/Contant";

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
          <>
            <Right />
            <Left />
          </>
          <>
            <Nav />
            <Home />
            <About />
            <Work />
            <Contant />
          </>
        </div>
      )}
    </>
  );
};

export default App;
