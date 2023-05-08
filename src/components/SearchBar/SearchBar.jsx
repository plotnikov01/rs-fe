import React from "react";
import "./searchbar.scss";

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <form action="/search" method="get" className="searchbar__form">
        <input type="text" name="q" className="searchbar__input" />
        <button type="submit" className="searchbar__button">
          Search
        </button>
      </form>
    </div>
  );
};
