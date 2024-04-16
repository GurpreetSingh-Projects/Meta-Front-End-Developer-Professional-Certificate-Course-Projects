import slide1 from "../../public/assets/img/slide1.jpg";
import slide2 from "../../public/assets/img/slide2.jpg";
import slide3 from "../../public/assets/img/slide3.jpg";
import MenuItem from "./MenuItem";
export default function Specials() {
  return (
    <section className="specials">
      <div className="title">This week's Specials</div>
      <div className="reserveButton" style={{ width: "20%" }}>
        Online Menu
      </div>
      <div className="menuItemWrapper">
        <MenuItem img={slide1} name={"Pan Cakes"} price={"99 $"} />
        <MenuItem img={slide2} name={"Food"} price={"199%"} />{" "}
        <MenuItem img={slide3} name={"Blueberry Pancakes"} price={"299$"} />
      </div>
    </section>
  );
}
