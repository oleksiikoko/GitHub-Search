import { IRepositoryItem } from "interfaces";

export const SET_SEARCH_RESULT = "SET_REPO_SEARCH_RESULT";

export interface ISearchResultState {
  total_count: number;
  repos: IRepositoryItem[];
}

interface ISetSearchResultAction {
  type: typeof SET_SEARCH_RESULT;
  payload: ISearchResultState;
}

export type ISearchResultActions = ISetSearchResultAction;
