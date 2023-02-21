import { useRef } from "react";

import searchIcon from "../../assets/icons/search_icon.png";
import resetIcon from "../../assets/icons/close_icon.png";

import "./SearchBox.css";

const SearchBox = ({ onSubmit, onReset, filtersDisabled }) => {
  const searchInputRef = useRef();
  const locationInputRef = useRef();
  const languageInputRef = useRef();
  function resetFilterHandler() {
    onReset();
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    const enteredUserVal = searchInputRef.current.value.trim();
    const enteredLocationVal = locationInputRef.current.value.trim();
    const enteredLanguageVal = languageInputRef.current.value.trim();
    if (!enteredUserVal) {
      return;
    }

    onSubmit({
      user: enteredUserVal,
      language: enteredLanguageVal,
      location: enteredLocationVal,
    });
  }
  return (
    <form className="search-box" onSubmit={formSubmitHandler}>
      <div className="search-box__form-control">
        <input
          className="search-box__user-input"
          type="text"
          required
          ref={searchInputRef}
          name="github-search-user"
          placeholder="Enter UserName"
        />
        <button className="search-box__search-btn">
          <img src={searchIcon} alt="search" />
        </button>
        <button
          type="reset"
          className="search-box__reset-btn"
          onClick={resetFilterHandler}
        >
          <img src={resetIcon} alt="reset" />
        </button>
      </div>
      <div
        className={`search-box__filters ${filtersDisabled ? "disable" : ""}`}
      >
        <label htmlFor="showFilterInput">Show Filters</label>
        <input type="checkbox" id="showFilterInput" />
        <div className="filter-box">
          <div className="filter-box__content">
            <input type="text" placeholder="location" ref={locationInputRef} />
            <input type="text" placeholder="language" ref={languageInputRef} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default SearchBox;
