import React from "react";

export default function MenuItem({ img, name, price }) {
  return (
    <section className="menuItem">
      <img src={img} alt="" />
      <div className="title">{name}</div>
      <div className="description">{price} Rs</div>
    </section>
  );
}
