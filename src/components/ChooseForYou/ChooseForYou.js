import React from "react";
import Books from "../Products/Books";
import "./ChooseForYou.css";

function ChooseForYou() {
  return (
    <section className="ChooseForYou section">
      <div className="container">
        <h2 className="section-title">أخترنا لك</h2>
      </div>
      <Books />
    </section>
  );
}

export default ChooseForYou;
