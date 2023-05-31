import "./NavBar.css";
import logo from "../../assets/react.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="contenedorNavBar">
      <img src="https://static.vecteezy.com/system/resources/previews/011/658/621/original/black-and-white-house-icon-with-transparent-background-png.png" alt="logo" />
      <a className="header__link" href="#">
        Cocina
      </a>
      <a className="header__link" href="#">
        Living
      </a>
      <a className="header__link" href="#">
        Patio
      </a>

      <CartWidget />
    </div>
  );
};

export default NavBar;
