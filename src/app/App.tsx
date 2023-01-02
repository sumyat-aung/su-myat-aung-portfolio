import { useEffect, useState } from "react";

import Nav from "../components/Nav";

import Intro from "../intro/Intro";
import Left from "../socials/Left";
import Right from "../socials/Right";

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
          </>
        </div>
      )}
    </>
  );
};

export default App;
