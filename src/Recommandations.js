import React from "react";
const Recommandations = () => {
  return (
    <section className="recom-sec">
      <div className="overlay-top"></div>
      <h2 className="title-recom">לקוחות מרוצים</h2>
      <div className="phone-container">
        <div className="phone">
          <img src={require("./imgs/whatsapp 1.png")} alt="whatsapp-image-1" />
          <img src={require("./imgs/whatsapp 2.png")} alt="whatsapp-image-2" />
        </div>
      </div>
      <div className="overlay-bot"></div>
    </section>
  );
};

export default Recommandations;
