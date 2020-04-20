import { SET_SEARCH_RESULT, ISearchResultState } from "./types";
import { ISearchRepository } from "interfaces";
import { gitApi } from "utils/api";

const Actions = {
  setSearchResult: (searchResult: ISearchResultState) => {
    return {
      type: SET_SEARCH_RESULT,
      payload: searchResult,
    };
  },
  fetchSearch: (searchQuery: ISearchRepository) => async (dispatch) => {
    const repos = await gitApi.searchRepository(searchQuery);
    let { items, total_count } = repos;

    items = parseRepos(items);
    items = await addTopics(items);
    items = await addIssuesNeedHelp(items);

    dispatch(Actions.setSearchResult({ total_count, repos: items }));
  },
};

export default Actions;

const parseRepos = (repos) => {
  return repos.map((item) => {
    const {
      name,
      full_name,
      owner,
      html_url,
      description,
      stargazers_count,
      language,
      license,
      updated_at,
    } = item;

    return {
      name,
      full_name,
      owner: owner.login,
      html_url,
      description,
      stargazers_count,
      language,
      license: license.name,
      updated_at,
    };
  });
};

const addTopics = (repos) => {
  return Promise.all(
    repos.map(async (item) => {
      const topics = await gitApi.getRepositoryTopics(item.owner, item.name);

      return {
        topics: topics.names,
        ...item,
      };
    })
  );
};

const addIssuesNeedHelp = (repos) => {
  return Promise.all(
    repos.map(async (item) => {
      const issues = await gitApi.getRepositoryIssuesNeedHelp(
        item.owner,
        item.name
      );

      return {
        issues_need_help: issues.length,
        ...item,
      };
    })
  );
};
