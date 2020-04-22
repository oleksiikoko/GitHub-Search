import "styles/AutocompleteItem.global.scss";

const AutocompleteItem: React.FC<{ search: string; onClick: Function }> = ({
  search,
  onClick,
}) => {
  return (
    <div
      className="autocomplete__item autocomplete__item--animation"
      onClick={() => {
        console.log("search");
        onClick(search);
      }}
    >
      {search !== "" && (
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
              fillRule="evenodd"
              d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
            ></path>
          </svg>
        </div>
      )}
      <div className="repo-name">
        {search !== "" ? search : "No result in cache"}
      </div>
      {search !== "" && (
        <div className="autocomplete__item-type">
          <span aria-label="in all of GitHub">All GitHub</span>
          <span aria-hidden="true">↵</span>
        </div>
      )}
    </div>
  );
};

export default AutocompleteItem;
