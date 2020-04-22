import { AutocompleteItem } from "components";

const Autocomplete: React.FC<{
  searchCache: string[];
  search: string;
  onSearch: Function;
}> = ({ searchCache, search, onSearch }) => {
  return (
    <div className="autocomplete">
      {searchCache.length !== 0 ? (
        searchCache.map((item, index) => (
          <AutocompleteItem onClick={onSearch} key={index} search={item} />
        ))
      ) : (
        <AutocompleteItem onClick={onSearch} search="" />
      )}
    </div>
  );
};

export default Autocomplete;
