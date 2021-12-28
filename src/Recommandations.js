import React, { useState, useEffect } from "react";
import images from "./images";
import { GrNext, GrPrevious } from "react-icons/gr";

const Recommandations = () => {
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => clearTimeout(timer);
  }, [curr]);

  const nextSlide = () => {
    {
      curr === images.length - 1 ? setCurr(0) : setCurr(curr + 1);
    }
  };

  const prevSlide = () => {
    {
      curr < 1 ? setCurr(images.length - 1) : setCurr(curr--);
    }
  };

  return (
    <section className="recom-sec">
      <div className="overlay-top"></div>
      <h2 className="title-recom">לקוחות מרוצים</h2>
      <button className="btn next-btn" onClick={() => nextSlide()}>
        <GrNext />
      </button>
      <div className="phone-container">
        <img
          src={require("./imgs/PngItem_1071582.png")}
          alt="phone case photo"
          className="phone"
        />

        <div className="whatsapp">
          {images.map((img, index) => {
            if (curr === index) {
              return (
                <img
                  className={index === curr ? "slide active" : "slide"}
                  src={require(`./imgs/${img.image}.png`)}
                  alt={img.alt}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
      <button className="btn prev-btn" onClick={() => prevSlide()}>
        {" "}
        <GrPrevious />{" "}
      </button>
      <div className="overlay-bot"></div>
    </section>
  );
};

export default Recommandations;
