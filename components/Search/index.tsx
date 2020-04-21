import React, { useState } from "react";
import classNames from "classnames";
import AutocompleteItem from "components/AutocompleteItem";

const Search = () => {
  const [inputFocused, setInputFocused] = useState(true);
  const onInputFocus = () => {
    setInputFocused(true);
  };
  const onInputBlur = () => {
    setInputFocused(false);
  };
  return (
    <div className="search">
      <div
        className={classNames("search__input", {
          "search__input--focus": inputFocused,
        })}
      >
        <input
          type="text"
          placeholder="Search or jump to..."
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />

        <img
          src="https://github.githubassets.com/images/search-key-slash.svg"
          alt="Search icon"
        />
      </div>
      <div className="search__autocomplete">
        <div className="autocomplete">
          <AutocompleteItem />
        </div>
      </div>
    </div>
  );
};

export default Search;
