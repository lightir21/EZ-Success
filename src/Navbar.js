import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="navbar-container">
        <div className="contacts">
          <a href="#">פלאפון: 0543193359</a>
          <a href="#"> אימייל: ezsucess@gmail.com</a>
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
