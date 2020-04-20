import {
  ISearchResultState,
  ISearchResultActions,
  SET_SEARCH_RESULT,
} from "./types";

const initialState: ISearchResultState = {
  total_count: null,
  repos: null,
};

export const repoSearchReducer = (
  state = initialState,
  action: ISearchResultActions
): ISearchResultState => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return {
        total_count: action.payload.total_count,
        repos: action.payload.repos,
      };
    default:
      return state;
  }
};
