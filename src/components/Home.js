import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const mediaQuery = "(max-width: 1024px)";
  const [mediaMatches, setMediaMatches] = useState(
    window.matchMedia(mediaQuery).matches
  );

  const handleMediaMatchChange = ({ matches }) => {
    setMediaMatches(matches);
  };

  useEffect(() => {
    window
      .matchMedia(mediaQuery)
      .addEventListener("change", handleMediaMatchChange);
  }, []);

  return (
    <div id="home">
      <header className="main-header">
        <img
          src="https://helixsleep-code-challenge.s3.amazonaws.com/logo.svg"
          alt="Allday"
          height="51"
          width="326"
          className="logo"
        />
        <Navbar matches={mediaMatches}></Navbar>
      </header>
    </div>
  );
};

export default Home;
