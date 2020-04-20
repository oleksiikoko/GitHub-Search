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
        if (response.status !== 200) {
          return Promise.reject(response.status);
        }
        return Promise.resolve(response.data);
      });
  },
  getRepositoryTopics: async (owner: string, repo: string): Promise<any> => {
    return await axios
      .get(`/repos/${owner}/${repo}/topics`)
      .then((response) => {
        if (response.status !== 200) {
          return Promise.reject(response.status);
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
        if (response.status !== 200) {
          return Promise.reject(response.status);
        }
        return Promise.resolve(response.data);
      });
  },
};
