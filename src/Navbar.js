import React from "react";
import { useState } from "react";

const Navbar = ({ scrollToRecomFun, scrollToAboutFun, scrollToFormFun }) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <section className="navbar-container">
        <div className="contacts">
          <div className={`${isClick ? "popup active" : "popup"}`}>הועתק</div>
          <button
            onClick={() => {
              navigator.clipboard.writeText("0543193359");
              setIsClick(true);
              setTimeout(() => {
                setIsClick(false);
              }, 3000);
            }}
          >
            פלאפון: 0543193359
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText("ez.success12@gmail.com");
              setIsClick(true);
              setTimeout(() => {
                setIsClick(false);
              }, 3000);
            }}
          >
            אימייל: ez.success12@gmail.com
          </button>
        </div>

        <div className="navigation">
          <button>בית</button>
          <button onClick={scrollToAboutFun}>עלינו</button>
          <button className="recom-btn" onClick={scrollToRecomFun}>
            לקוחות כותבים
          </button>
          <button onClick={scrollToFormFun}>צרו קשר</button>
        </div>
      </section>
      <div className="navbar-divider"></div>
    </>
  );
};

export default Navbar;
