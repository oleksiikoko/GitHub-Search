import { getRequestParser } from "utils";
import { axiosGitApi as axios } from "core";
import { ISearchRepository } from "interfaces";

export default {
  searchRepository: async (
    searchRequest: ISearchRepository = {}
  ): Promise<any> => {
    return await axios
      .get(`/search/repositories${getRequestParser(searchRequest)}`)
      .then((response) => {
        console.log("response.status", response.status);
        if (response.status !== 200) {
          return Promise.reject();
        }
        return Promise.resolve(response.data);
        // const { total_count, incomplete_results, items } = response.data;
        // console.log(
        //   items.map((item) => {
        //     const {
        //       full_name,
        //       html_url,
        //       description,
        //       stargazers_count,
        //       language,
        //       license,
        //       updated_at,
        //     } = item;
        //     return {
        //       full_name,
        //       html_url,
        //       description,
        //       stargazers_count,
        //       language,
        //       license: license.name,
        //       updated_at,
        //     };
        //   })
        // );
      });
  },
  getRepositoryTopics: async (owner: string, repo: string): Promise<any> => {
    return await axios
      .get(`/repos/${owner}/${repo}/topics`)
      .then((response) => {
        console.log("response.status", response.status);
        if (response.status !== 200) {
          return Promise.reject();
        }
        return Promise.resolve(response.data);
      });
  },
  getRepositoryIssuesNeedHelp: async (
    owner: string,
    repo: string
  ): Promise<any> => {
    return await axios
      .get(
        `/repos/${owner}/${repo}/issues${getRequestParser({
          labels: "help wanted",
        })}`
      )
      .then((response) => {
        console.log("response.status", response.status);
        if (response.status !== 200) {
          return Promise.reject();
        }
        console.log("response.data", response.data.length);
        return Promise.resolve(response.data);
      });
  },
};

// name
// discription
// topics
// stars
// labguage
// license
// updated
// issues needs help
