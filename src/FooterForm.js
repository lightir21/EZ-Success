import React from "react";

const FooterForm = ({ scrollToForm }) => {
  return (
    <div className="footer-container" ref={scrollToForm}>
      <div className="footer-info">
        <div className="contacts-footer">
          <h2>צרו איתנו קשר</h2>
          <button
            onClick={(e) => {
              navigator.clipboard.writeText("0543193359");
            }}
          >
            פלאפון: 0543193359
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText("ez.success12@gmail.com");
            }}
          >
            אימייל: ez.success12@gmail.com
          </button>
        </div>
      </div>
      <div className="footer-form">
        <h2 className="footer">
          למה אתם מחכים?<br></br> שלחו לנו הודעה
        </h2>
        <form action="submit">
          <div className="name">
            <label htmlFor="name">שם מלא:</label>
            <input type="text" id="name" />
          </div>
          <div className="email">
            <label htmlFor="email">אימייל:</label>
            <input type="email" id="email" />
          </div>
          <button className="form-submit-btn">שלח</button>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
