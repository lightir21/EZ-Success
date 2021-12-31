import React from "react";

const MidForm = () => {
  return (
    <div className="mid-container">
      <div className="mid-form">
        <form action="submit">
          <div className="mid-form-title">
            <h3>ליצרת קשר</h3>
          </div>

          <div className="name">
            <input type="text" id="mid-name" placeholder="שם מלא" />
          </div>
          <div className="email">
            <input type="email" id="mid-email" placeholder="אימייל" />
          </div>
          <div className="form-phone">
            <input type="text" id="mid-form-phone" placeholder="פלאפון" />
          </div>
          <button className="mid-form-submit-btn">שלח</button>
        </form>
      </div>
    </div>
  );
};

export default MidForm;
