import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container content__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://github.com/Balaishka/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <img src={arrow} alt="Стрелка" className="portfolio__img" />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://balaishka.github.io/balai-russian-travel/"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <img src={arrow} alt="Стрелка" className="portfolio__img" />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/Balaishka/react-mesto-api-full-1"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <img src={arrow} alt="Стрелка" className="portfolio__img" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
