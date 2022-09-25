import "./ErrorPopup.css";
import close from "../../images/close-white.svg";

function ErrorPopup({ message, isError, closePopup }) {
  return (
    <>
      {isError && (
        <div className="error-popup">
          <div className="error-popup__container">
            <button
              className="error-popup__close"
              onClick={closePopup}
              type="button"
            >
              <img src={close} alt="Закрыть" />
            </button>
            <h3 className="error-popup__title">Ошибка!</h3>
            <p className="error-popup__message">{message}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ErrorPopup;
