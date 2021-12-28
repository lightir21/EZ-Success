import React from "react";

const FooterForm = ({ scroll }) => {
  return (
    <div className="footer-container" ref={scroll}>
      <div className="footer-info">
        <div className="contacts-footer">
          <h2>צרו איתנו קשר</h2>
          <a href="#">פלאפון: 0543193359</a>
          <a href="#"> אימייל: ezsucess@gmail.com</a>
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
