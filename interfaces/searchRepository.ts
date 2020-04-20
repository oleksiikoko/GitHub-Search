enum Sort {
  STARS = "stars",
  FORKS = "forks",
  HELP_WANTED_ISSUES = "help-wanted-issues",
  UPDATED = "updated",
}

enum Order {
  DESC = "desc",
  ASC = "asc",
}

export default interface ISearch {
  q?: string;
  sort?: Sort;
  order?: Order;
  per_page?: number;
  page?: number;
}
