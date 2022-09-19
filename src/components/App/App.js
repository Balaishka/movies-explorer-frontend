import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Тестовая ошибка");

  function handleRegister({ name, email, password }) {
    console.log(`Регистрируемся с данными: ${name} ${email} ${password}`);
    setIsError(true);
    setErrorMessage("Ошибка данных");
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    console.log(`Авторизуемся с данными: ${email} ${password}`);
    setLoggedIn(true);
    setIsLoading(false);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  function closeErrorPopup() {
    setIsError(false);
  }

  return (
    <>
      <div className="page">
        <Header loggedIn={loggedIn} />

        <main className="content">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/saved-movies">
              <SavedMovies />
            </Route>

            <Route path="/profile">
              <Profile onSubmit={handleLogout} />
            </Route>

            <Route path="/signin">
              <Login onSubmit={handleLogin} />
            </Route>

            <Route path="/signup">
              <Register onSubmit={handleRegister} />
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>

        <Footer />

        <Preloader isLoading={isLoading} />

        <ErrorPopup
          isError={isError}
          message={errorMessage}
          closePopup={closeErrorPopup}
        />
      </div>
    </>
  );
}

export default App;
