import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container content__container">
        <form action="search" className="search__form">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            required
          />
          <button className="search__btn" type="submit"></button>
        </form>

        <FilterCheckbox />

        <div className="search__line"></div>
      </div>
    </section>
  );
}

export default SearchForm;
