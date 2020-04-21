import { Search as SearchBase } from "components";

import "styles/Search.global.scss";

const Search = ({ onSearch }) => {
  return <SearchBase onSearch={onSearch} />;
};

export default Search;
