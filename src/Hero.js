import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = ({ scrollToFormFun }) => {
  return (
    <section className="hero">
      <div className="img-container">
        <div className="image"></div>
      </div>
      <div className="btn-container">
        <button className="hero-btn" onClick={scrollToFormFun}>
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
      <a href="https://wa.me/972543193359" className="whats-icon">
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Hero;
