import React from "react";
import { send } from "emailjs-com";

const FooterForm = ({ scrollToForm, toSend, setToSend }) => {
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.name && toSend.reply_to && toSend.from_name) {
      send(
        "service_rc9k8x9",
        "template_zl582b7",
        toSend,
        "user_6IV0zNnkbdBxBaYAfepbn"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
      setToSend({ from_name: "", message: "", reply_to: "" });
    }
  };

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
        <form onSubmit={onSubmit}>
          <div className="name">
            <label htmlFor="name">שם מלא:</label>
            <input
              type="text"
              id="name"
              value={toSend.from_name}
              name="from_name"
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">אימייל:</label>
            <input
              type="email"
              id="email"
              value={toSend.reply_to}
              name="reply_to"
              onChange={handleChange}
            />
          </div>
          <div className="phone-form">
            <label htmlFor="phone-form">פלאפון:</label>
            <input
              type="text"
              id="phone-form"
              value={toSend.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button className="form-submit-btn" onSubmit={onSubmit}>
            שלח
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
