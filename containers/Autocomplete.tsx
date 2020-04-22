import { AutocompleteItem } from "components";

const Autocomplete: React.FC<{ searchCache: string[]; search: string }> = ({
  searchCache,
  search,
}) => {
  console.log(searchCache);
  return (
    <div className="autocomplete">
      {searchCache !== [] &&
        searchCache.map((item, index) => (
          <AutocompleteItem key={index} search={item} />
        ))}
    </div>
  );
};

export default Autocomplete;
