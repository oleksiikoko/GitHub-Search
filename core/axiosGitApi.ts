import axios from "axios";

axios.defaults.headers.common["Accept"] =
  "application/vnd.github.mercy-preview+json";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer 22f0c67ba87ca65248b5f1cf5cbe723d98720100`;

axios.defaults.baseURL = "https://api.github.com";

export default axios;
