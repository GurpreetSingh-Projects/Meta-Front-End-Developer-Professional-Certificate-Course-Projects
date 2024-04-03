import React from "react";

export default function Menu() {
  return (
    <section id="hero">
      <div className="left">
        <div className="title">
          Little Lemon <br /> Chicago
        </div>
        <div className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          placeat commodi totam debitis beatae odio labore ipsa iure atque
          provident.
        </div>
        <button className="reserveButton">Reserve Table</button>
      </div>
      <div className="right">
        <img src="assets/img/heroimg.jpg" alt="" />
      </div>
    </section>
  );
}
