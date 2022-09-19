import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import movies from "../../configs/constants";

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__container content__container">
        <ul className="movies__list">
          {movies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
        </ul>
        <button className="movies__btn" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
