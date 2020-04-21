// import { gitApi } from "utils/api";

import { connect } from "react-redux";

import searchReposActions from "store/repoSearch/actions";
import { Header } from "components";
import { SearchResult } from "containers";

function HomePage({ total_count, repos, fetchSearch }) {
  const onSearch = (request: string) => {
    fetchSearch({
      q: request,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: 1,
    });
  };
  return (
    <>
      <Header onSearch={onSearch} />
      {repos && <SearchResult total_count={total_count} repos={repos} />}
    </>
  );
}

const mapStateToProps = ({ repoSearchReducer }) => ({
  total_count: repoSearchReducer.total_count,
  repos: repoSearchReducer.repos,
});
const mapDispatchToProps = { fetchSearch: searchReposActions.fetchSearch };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
