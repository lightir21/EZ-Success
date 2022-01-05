import React from "react";
import { send } from "emailjs-com";

const MidForm = (toSend, setToSend) => {
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
    } else {
      alert("אחד או יותר מהשדות ריקות... יש למלא את כל הפרטים");
    }
  };

  return (
    <div className="mid-container">
      <div className="mid-form">
        <form onSubmit={onSubmit}>
          <div className="mid-form-title">
            <h3>ליצרת קשר</h3>
          </div>

          <div className="name">
            <input
              type="text"
              id="mid-name"
              value={toSend.from_name}
              name="from_name"
              onChange={handleChange}
              placeholder="שם מלא"
            />
          </div>
          <div className="email">
            <input
              type="email"
              id="mid-email"
              placeholder="אימייל"
              value={toSend.reply_to}
              name="reply_to"
              onChange={handleChange}
            />
          </div>
          <div className="form-phone">
            <input
              type="text"
              id="mid-form-phone"
              placeholder="פלאפון"
              value={toSend.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button className="mid-form-submit-btn" onSubmit={onSubmit}>
            שלח
          </button>
        </form>
      </div>
    </div>
  );
};

export default MidForm;
