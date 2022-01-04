import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Recommandations from "./Recommandations";
import FooterForm from "./FooterForm";
import MidForm from "./MidForm";

const App = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "EZ-Success",
    message: "",
    reply_to: "",
  });

  const scrollToForm = useRef(null);
  const scrollToFormFun = () =>
    scrollToForm.current.scrollIntoView({ behavior: "smooth" });

  const scrollToRecom = useRef(null);
  const scrollToRecomFun = () =>
    scrollToRecom.current.scrollIntoView({
      behavior: "smooth",
    });

  const scrollToAbout = useRef(null);
  const scrollToAboutFun = () =>
    scrollToAbout.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar
        scrollToRecomFun={scrollToRecomFun}
        scrollToAboutFun={scrollToAboutFun}
        scrollToFormFun={scrollToFormFun}
      />
      <Hero scrollToFormFun={scrollToFormFun} />
      <MidForm toSend={toSend} setToSend={setToSend} />
      <About scrollToAbout={scrollToAbout} />
      <Recommandations scrollToRecom={scrollToRecom} />
      <FooterForm
        scrollToForm={scrollToForm}
        toSend={toSend}
        setToSend={setToSend}
      />
    </>
  );
};

export default App;
