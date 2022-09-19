import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  if (
    pathname !== "/" &&
    pathname !== "/movies" &&
    pathname !== "/saved-movies"
  ) {
    return <></>;
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://practicum.yandex.ru/" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/Balaishka/" className="footer__link">
                Github
              </a>
            </li>
          </ul>
          <p className="footer__copyright">© 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
