import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../../images/profile.svg";

function Navigation({ loggedIn }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  return (
    <div className="navigation">
      {loggedIn ? (
        <>
          <button
            className="navigation__btn-burger"
            type="button"
            onClick={openMenu}
          ></button>
          <div
            className={`navigation__menu-background ${
              isMenuOpened ? "navigation__menu-background_opened" : ""
            }`}
          ></div>
          <div
            className={`navigation__menu ${
              isMenuOpened ? "navigation__menu_opened" : ""
            }`}
          >
            <button
              className="navigation__btn-close"
              onClick={closeMenu}
            ></button>
            <nav className="navigation__nav_name_auth">
              <ul className="navigation__list_name_auth">
                <li className="navigation__item_name_auth">
                  <NavLink
                    exact
                    to="/"
                    className="navigation__link_name_auth"
                    activeClassName="navigation__link_active"
                    onClick={closeMenu}
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="navigation__item_name_auth">
                  <NavLink
                    to="/movies"
                    className="navigation__link_name_auth"
                    activeClassName="navigation__link_active"
                    onClick={closeMenu}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="navigation__item_name_auth">
                  <NavLink
                    to="/saved-movies"
                    className="navigation__link_name_auth"
                    activeClassName="navigation__link_active"
                    onClick={closeMenu}
                  >
                    Сохраненные фильмы
                  </NavLink>
                </li>
              </ul>
              <NavLink
                to="/profile"
                className="navigation__btn_name_auth"
                onClick={closeMenu}
              >
                <img
                  className="navigation__img_name_auth"
                  src={profile}
                  alt="Аккаунт"
                />
                Аккаунт
              </NavLink>
            </nav>
          </div>
        </>
      ) : (
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/signup" className="navigation__link">
                Регистрация
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/signin" className="navigation__btn">
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
