import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div action="search-filter" className="search__filter">
      <input type="checkbox" id="checkbox" className="search__checkbox" />
      <label htmlFor="checkbox" className="search__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
