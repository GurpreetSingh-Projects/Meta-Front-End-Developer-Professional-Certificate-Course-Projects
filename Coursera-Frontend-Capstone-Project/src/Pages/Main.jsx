import Footer from "../components/Footer";
import Header from "../components/Header";
import History from "../components/History";
import Menu from "../components/Menu";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

export default function Main() {
  return (
    <>
      <Header />
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
        <History />
        <Footer />
      </section>
    </>
  );
}
