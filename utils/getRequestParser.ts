const getRequestParser = (searchRequest: any): string => {
  let searchString: string = "?";

  for (const [key, value] of Object.entries(searchRequest)) {
    searchString += `${key}=${value.toString().replace(" ", "+")}&`;
  }

  return searchString.slice(0, -1);
};

export default getRequestParser;
