import React, { useState } from "react";
import classNames from "classnames";

import { searchCache } from "utils";

import Autocomplete from "containers/Autocomplete";

const Search = ({ onSearch }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchCacheValue, setSearchCacheValue] = useState([]);

  const onInputFocus = () => {
    setInputFocused(true);
    setSearchCacheValue(searchCache.searchIn(inputValue));
  };

  const onInputBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
    }, 500);
  };

  const onInputChange = (event) => {
    setSearchCacheValue(searchCache.searchIn(inputValue));
    setInputValue(event.target.value);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      searchCache.writeTo(event.target.value);
      event.target.blur();
    }
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
          onKeyDown={onEnter}
          onChange={onInputChange}
          value={inputValue}
        />

        <img
          src="https://github.githubassets.com/images/search-key-slash.svg"
          alt="Search icon"
        />
      </div>
      <div className="search__autocomplete">
        {inputFocused && (
          <Autocomplete
            onSearch={(value) => {
              setInputValue(value);
              onSearch(value);
            }}
            searchCache={searchCacheValue}
            search={inputValue}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
