export default interface IRepositoryItem {
  full_name: string;
  owner: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  license: string;
  updated_at: Date;
  topics: string[];
  issues_need_help: number;
}
