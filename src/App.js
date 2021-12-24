import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Recommandations from "./Recommandations";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Recommandations />
    </>
  );
};

export default App;
