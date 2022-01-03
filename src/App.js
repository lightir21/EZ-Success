import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Recommandations from "./Recommandations";
import FooterForm from "./FooterForm";
import MidForm from "./MidForm";

const App = () => {
  const scrollToForm = useRef(null);
  const scrollToFormFun = () =>
    scrollToForm.current.scrollIntoView({ behavior: "smooth" });

  const scrollToRecom = useRef(null);
  const scrollToRecomFun = () =>
    scrollToRecom.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

  return (
    <>
      <Navbar scrollToRecomFun={scrollToRecomFun} />
      <Hero scrollToFormFun={scrollToFormFun} />
      <MidForm />
      <About />
      <Recommandations scrollToRecom={scrollToRecom} />
      <FooterForm scrollToForm={scrollToForm} />
    </>
  );
};

export default App;
