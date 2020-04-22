const GIT_SEARCH_CACHE = "gitSearchCache";

export default {
  writeTo: (searchRequest: string) => {
    if (localStorage) {
      if (!localStorage[GIT_SEARCH_CACHE])
        localStorage[GIT_SEARCH_CACHE] = JSON.stringify(searchRequest);

      const store = new Set<string>(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      store.add(searchRequest);
      localStorage[GIT_SEARCH_CACHE] = JSON.stringify(Array.from(store));
    }
  },
  searchIn: (searchRequest: string) => {
    if (localStorage) {
      if (!localStorage[GIT_SEARCH_CACHE]) {
        localStorage[GIT_SEARCH_CACHE] = "";
        return [];
      }

      const store = new Set<string>(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      const result = Array.from(store).filter(
        (item) => item.search(searchRequest) !== -1
      );
      return result;
    }
  },
};
