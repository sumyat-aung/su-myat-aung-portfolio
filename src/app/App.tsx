import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Intro from "../intro/Intro";

import Left from "../socials/Left";
import Right from "../socials/Right";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ProjectsPage from "../pages/ProjectsPage";

// ! ^ importing ^

const App: React.FC = () => {
  // Intro showing for 3s
  const [intro, setIntro] = useState<boolean>(false);
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

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Skills />
                  <Work />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
