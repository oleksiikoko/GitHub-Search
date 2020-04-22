import axios from "axios";

axios.defaults.headers.common["Accept"] =
  "application/vnd.github.mercy-preview+json";

axios.defaults.baseURL = "https://api.github.com";

export default axios;
