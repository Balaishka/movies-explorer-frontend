import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="error">
      <div className="error__cap"></div>
      <div className="error__info">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
      </div>
      <nav className="error__nav">
        <NavLink to="/" className="error__link">
          Назад
        </NavLink>
      </nav>
    </section>
  );
}

export default PageNotFound;
