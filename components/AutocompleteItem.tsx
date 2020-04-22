import "styles/AutocompleteItem.global.scss";
import SearchSvg from "assets/img/SearchSvg";

interface IProps {
  search: string;
  onClick: Function;
}

const AutocompleteItem: React.FC<IProps> = ({ search, onClick }) => {
  return (
    <div
      className="autocomplete__item autocomplete__item--animation"
      onClick={() => {
        onClick(search);
      }}
    >
      {search !== "" && (
        <div>
          <SearchSvg />
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
