// import React from "react";

// export default function MenuItem({ img, name, price }) {
//   return (
//     <section classNameName="menuItem">
//       <img src={img} alt="" />
//       <div classNameName="title">{name}</div>
//       <div classNameName="description">{price} Rs</div>
//     </section>
//   );
// }

export default function MenuItem({ img, name, price }) {
  return (
    <div className="card m-2 menuItem">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
}
