import Nav from "./Nav";
export default function Header() {
  return (
    <div>
      <div className="headerContainer">
        <div className="left">
          <img src="assets/img/logo.png" alt="hi" />
        </div>
        <div className="right">
          <Nav />
        </div>
      </div>
    </div>
  );
}
