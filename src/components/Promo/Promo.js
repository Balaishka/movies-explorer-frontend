import "./Promo.css";
import promo from "../../images/promo.png";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container content__container">
        <div className="promo__block">
          <img src={promo} alt="Промо" className="promo__img" />
          <div className="promo__text">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
        </div>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
