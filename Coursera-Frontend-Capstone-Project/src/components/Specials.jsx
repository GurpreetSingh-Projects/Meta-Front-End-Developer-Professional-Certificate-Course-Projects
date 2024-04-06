import React from "react";
import MenuItem from "./MenuItem";
export default function Specials() {
  return (
    <section className="specials">
      <div className="title">This week's Specials</div>
      <div className="reserveButton" style={{ width: "20%" }}>
        Online Menu
      </div>
      <div className="menuItemWrapper">
        <MenuItem
          img={
            "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph"
          }
          name={"Food"}
          price={99}
        />
        <MenuItem
          img={
            "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph"
          }
          name={"Food"}
          price={199}
        />{" "}
        <MenuItem
          img={
            "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph"
          }
          name={"Food"}
          price={299}
        />
      </div>
    </section>
  );
}
