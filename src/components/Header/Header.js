import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const { pathname } = useLocation();

  if (
    pathname !== "/" &&
    pathname !== "/movies" &&
    pathname !== "/saved-movies" &&
    pathname !== "/profile"
  ) {
    return <></>;
  }

  return (
    <header className={`header ${pathname === "/" ? "header_name_main" : ""}`}>
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </NavLink>

        <Navigation
          loggedIn={loggedIn}
          isMain={pathname === "/" ? true : false}
        />
      </div>
    </header>
  );
}

export default Header;
