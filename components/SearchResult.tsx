import { RepoItem } from "components";
import { IRepositoryItem } from "interfaces";

interface IProps {
  total_count: number;
  repos: IRepositoryItem[];
}

const SearchResult: React.FC<IProps> = ({ total_count, repos }) => {
  return (
    <>
      <div className="content-center">
        <h3 className="search-result-header">
          {total_count.toLocaleString()} repository results
        </h3>
        {repos.map((item, index) => {
          return <RepoItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default SearchResult;
