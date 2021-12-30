import React from "react";
import { useState } from "react/cjs/react.development";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <section className="navbar-container">
        <div className="contacts">
          <div className={`${isClick ? "popup active" : "popup"}`}>הועתק</div>
          <button
            onClick={(e) => {
              navigator.clipboard.writeText("0547345792");
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
              navigator.clipboard.writeText("ezsucess@gmail.com");
              setIsClick(true);
              setTimeout(() => {
                setIsClick(false);
              }, 3000);
            }}
          >
            אימייל: ezsucess@gmail.com
          </button>
        </div>

        <div className="navigation">
          <button>בית</button>
          <button>עלינו</button>
          <button>לקוחות כותבים</button>
          <button>צרו קשר</button>
        </div>
      </section>
      <div className="navbar-divider"></div>
    </>
  );
};

export default Navbar;
