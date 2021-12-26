import React, { useState } from "react";
import images from "./images";
import { GrNext, GrPrevious } from "react-icons/gr";

const Recommandations = () => {
  const [curr, setCurr] = useState(0);
  return (
    <section className="recom-sec">
      <div className="overlay-top"></div>
      <h2 className="title-recom">לקוחות מרוצים</h2>
      <GrNext className="next-btn" />
      <div className="phone-container">
        <img
          src={require("./imgs/PngItem_1071582.png")}
          alt="phone case photo"
          className="phone"
        />

        <div className="whatsapp">
          {images.map((img, index) => {
            return (
              <img
                src={require(`./imgs/${img.image}.png`)}
                alt={img.alt}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <GrPrevious className="prev-btn" />
      <div className="overlay-bot"></div>
    </section>
  );
};

export default Recommandations;
