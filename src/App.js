import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Recommandations from "./Recommandations";
import FooterForm from "./FooterForm";

const App = () => {
  const scroll = useRef(null);
  const scrollTo = () => scroll.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Navbar />
      <Hero scrollTo={scrollTo} />

      <About />
      <Recommandations />
      <FooterForm scroll={scroll} />
    </>
  );
};

export default App;
