import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function Main() {
  return (
    <>
      <Menu />
      <Specials />
      <section className="testimonials">
        <div className="title">Testimonials</div>
        <div className="testimonialsContainer">
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </section>
    </>
  );
}
