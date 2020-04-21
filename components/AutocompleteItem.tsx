import "styles/AutocompleteItem.global.scss";

const AutocompleteItem = () => {
  return (
    <div className="autocomplete__item">
      <div>
        <svg
          height="16"
          width="16"
          aria-label="Search"
          viewBox="0 0 16 16"
          version="1.1"
          role="img"
        >
          <path
            fill-rule="evenodd"
            d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
          ></path>
        </svg>
      </div>
      <div className="repo-name">Name</div>
      <div
        // class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 js-jump-to-badge-search"
        className="autocomplete__item-type"
      >
        <span
          // class="js-jump-to-badge-search-text-global"
          aria-label="in all of GitHub"
        >
          All GitHub
        </span>
        <span
          aria-hidden="true"
          // class="d-inline-block ml-1 v-align-middle"
        >
          ↵
        </span>
      </div>
    </div>
  );
};

export default AutocompleteItem;
