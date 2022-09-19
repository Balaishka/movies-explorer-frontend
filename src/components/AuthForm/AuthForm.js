import "./AuthForm.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm({
  onSubmit,
  title,
  buttonText,
  buttonClass = "",
  link,
  linkText,
  textWithLink,
  data,
  children,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <section className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__block">
          <NavLink className="auth__logo" exact to="/">
            <img className="auth__img" src={logo} alt="Логотип" />
          </NavLink>
          <h1 className="auth__title">{title}</h1>
          {children}
        </div>
        <div className="auth__block">
          <button
            type="submit"
            className={`auth__btn ${buttonClass}`}
            aria-label={title}
          >
            {buttonText}
          </button>
          <p className="auth__text">
            {textWithLink}
            <NavLink className="auth__link" to={link}>
              {linkText}
            </NavLink>
          </p>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
