import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container content__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__block">
          <img src={photo} alt="Моя фотография" className="about-me__img" />
          <div className="about-me__info">
            <div className="about-me__info-block">
              <h3 className="about-me__name">Балаи</h3>
              <p className="about-me__profession">
                Фронтенд-разработчик, 27 лет
              </p>
              <p className="about-me__description">
                Я родилась и живу в Санкт-Петербурге, закончила факультет
                Дизайна университета при МПА ЕврАзЭС. У меня есть муж. Я люблю
                слушать музыку и смотреть фильмы, а ещё увлекаюсь велоспортом и
                волейболом. Начала работать фронтенд-разработчиком сразу после
                окончания института в 2018 году в компании «Инфотех». Иногда
                занимаюсь фриланс-заказами, но больше люблю работать в команде.
              </p>
            </div>
            <a href="https://github.com/Balaishka" className="about-me__link">
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
