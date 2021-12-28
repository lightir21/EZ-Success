import React from "react";

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
    </section>
  );
};

export default Hero;
