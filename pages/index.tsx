// import { gitApi } from "utils/api";

import { connect } from "react-redux";

import searchReposActions from "store/repoSearch/actions";
import { Header } from "components";

function HomePage({ fetchSearch }) {
  fetchSearch({
    q: "js",
    sort: "stars",
    order: "desc",
    per_page: 30,
    page: 1,
  });
  // Promise.all([
  //   gitApi.searchRepository({
  //     q: "js",
  //     // ,sort:"stars",order="desc"
  //     per_page: 1,
  //     page: 1,
  //   }),
  //   gitApi.getRepositoryTopics("vuejs", "vue"),
  //   gitApi.getRepositoryIssuesNeedHelp("vuejs", "vue"),
  // ]).then((response) => {
  //   console.log(response);
  // });
  return (
    <>
      <Header />
    </>
  );
}

const mapStateToProps = ({ repoSearchReducer }) => ({
  // posts: repoSearchReducer.posts,
});
const mapDispatchToProps = { fetchSearch: searchReposActions.fetchSearch };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
