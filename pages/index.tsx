// import { gitApi } from "utils/api";

import { connect } from "react-redux";

import searchReposActions from "store/repoSearch/actions";

function HomePage({ fetchSearch }) {
  fetchSearch({
    q: "js",
    sort: "stars",
    order: "desc",
    per_page: 1,
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
  return <div>Welcome to Next.js!</div>;
}

const mapStateToProps = ({ repoSearchReducer }) => ({
  // posts: repoSearchReducer.posts,
});
const mapDispatchToProps = { fetchSearch: searchReposActions.fetchSearch };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
