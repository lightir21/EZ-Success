import React from "react";

const About = () => {
  return (
    <>
      <h1 className="title">מי אנחנו?</h1>
      <h3 className="secondary-title">
        צוות כותבים עם ניסיון רב בעולם האקדמי, אשר מספק שירותים מהירים, איכותיים
        והוגנים ומביא לכם את המתכון להצלחה בזמן הקצר ביותר.
      </h3>
      <div className="divider"></div>
      <div className="blocks-container">
        <div className="blocks seminarion">
          <img
            src={require("./imgs/תמונה-סמינריון.jpg")}
            alt="seminarion photo"
          />
          <div className="overlay"></div>
          <h2>עבודה סמינריונית</h2>
          <p className="inner-text">
            כתיבה במגוון תחומים במדעי החברה והרוח ובזמן קצר עם הצלחה מובטחת
          </p>
        </div>
        <div className="blocks academy">
          <img src={require("./imgs/עבודות-אקדמיות.jpg")} alt="academic work" />
          <div className="overlay"></div>
          <h2>עבודות אקדמאיות</h2>
          <p className="inner-text">
            כחלק משירותנו, אנו מספקים סיוע בכל קושי במטלה אקדמית בתואר שלכם.
          </p>
        </div>
        <div className="blocks translation">
          <img src={require("./imgs/תרגום מאמרים.jpg")} alt="" />
          <div className="overlay"></div>
          <h2>תרגום מאמרים</h2>
          <p className="inner-text">
            נתקלתם בקושי בהבנת מאמר? המאמר ארוך מדי לתרגום? אנחנו כאן בשבילכם.
          </p>
        </div>
        <div className="blocks fixes">
          <img src={require("./imgs/שרותי תיקון.jpg")} alt="" />
          <div className="overlay"></div>
          <h2>שירות תיקונים</h2>
          <p className="inner-text">
            העבודה שלכם מצריכה תיקון? אנחנו כאן לכל תיקון שתצטרכו, כדי להביא את
            העבודה שלכם לרמה הגבוהה ביותר.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
