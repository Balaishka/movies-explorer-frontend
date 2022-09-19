import AuthForm from "../AuthForm/AuthForm";
import { useState } from "react";

function Login({ onSubmit }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(data) {
    onSubmit(data);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonText="Войти"
      buttonClass="auth__btn_name_login"
      link="/signup"
      linkText="Регистрация"
      textWithLink="Ещё не зарегистрированы?"
      data={data}
    >
      <span className="auth__input-text">E-mail</span>
      <input
        name="email"
        className="auth__input"
        type="text"
        onChange={handleChange}
        value={data.email}
      />
      <span className="auth__input-text">Пароль</span>
      <input
        name="password"
        className="auth__input"
        type="password"
        onChange={handleChange}
        value={data.password}
      />
    </AuthForm>
  );
}

export default Login;
