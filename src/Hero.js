import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const Hero = ({ scrollTo }) => {
  return (
    <section className="hero">
      <div className="img-container">
        <div className="image"></div>
      </div>
      <div className="btn-container">
        <button className="hero-btn" onClick={scrollTo}>
          צרו קשר
        </button>
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/EZSuccess12" className="facebook">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/ez_success12/" className="insta">
          <FaInstagramSquare />
        </a>
      </div>
      <FloatingWhatsApp phone={"947547345792"} message={"צור איתנו קשר"} />
    </section>
  );
};

export default Hero;
