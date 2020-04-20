import { gitApi } from "utils/api";

function HomePage() {
  Promise.all([
    gitApi.searchRepository({
      q: "js",
      // ,sort:"stars",order="desc"
      per_page: 1,
      page: 1,
    }),
    gitApi.getRepositoryTopics("vuejs", "vue"),
    gitApi.getRepositoryIssuesNeedHelp("vuejs", "vue"),
  ]).then((response) => {
    console.log(response);
  });
  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
