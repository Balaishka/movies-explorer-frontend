import { useState } from "react";
import "./Profile.css";

function Profile({ onSubmit }) {
  const [isEdit, setIsEdit] = useState(false);

  const [data, setData] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function editTrue() {
    setIsEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <section className="profile">
      <div className="profile__container content__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <ul className="profile__list">
            <li className="profile__item">
              <span className="profile__text">Имя</span>
              {isEdit ? (
                <input
                  className="profile__input profile__input_name_name"
                  value={data.name}
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength="30"
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  className="profile__input profile__input_name_name"
                  value="Виталий"
                  readOnly
                  disabled
                />
              )}
            </li>
            <li className="profile__item">
              <span className="profile__text">E-mail</span>
              {isEdit ? (
                <input
                  className="profile__input profile__input_name_email"
                  value={data.email}
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  className="profile__input profile__input_name_email"
                  value="pochta@yandex.ru"
                  readOnly
                  disabled
                />
              )}
            </li>
          </ul>
          <div className="profile__buttons">
            {isEdit ? (
              <button
                type="button"
                className="profile__btn profile__btn_name_save"
                disabled
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="profile__btn profile__btn_name_edit"
                  onClick={editTrue}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__btn profile__btn_name_logout"
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
