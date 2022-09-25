import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about-projects" className="about-projects">
      <div className="about-projects__container content__container">
        <h2 className="about-projects__title">О проекте</h2>
        <ul className="about-projects__list">
          <li className="about-projects__item">
            <h3 className="about-projects__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-projects__info">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-projects__item">
            <h3 className="about-projects__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-projects__info">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="about-projects__time-list">
          <li className="about-projects__time-item">
            <p className="about-projects__time-subtitle about-projects__time-subtitle_color_green">
              1 неделя
            </p>
            <p className="about-projects__time-info">Back-end</p>
          </li>
          <li className="about-projects__time-item">
            <p className="about-projects__time-subtitle about-projects__time-subtitle_color_grey">
              4 недели
            </p>
            <p className="about-projects__time-info">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
