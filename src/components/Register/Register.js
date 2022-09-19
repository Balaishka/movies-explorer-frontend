import AuthForm from "../AuthForm/AuthForm";
import { useState } from "react";

function Register({ onSubmit }) {
  const [data, setData] = useState({
    name: "",
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
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      link="/signin"
      linkText="Войти"
      textWithLink="Уже зарегистрированы?"
      data={data}
    >
      <span className="auth__input-text">Имя</span>
      <input
        name="name"
        className="auth__input"
        type="text"
        onChange={handleChange}
        value={data.name}
        minLength="2"
        maxLength="30"
      />
      <span className="auth__input-text">E-mail</span>
      <input
        name="email"
        className="auth__input"
        type="email"
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

export default Register;
