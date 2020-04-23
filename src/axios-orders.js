import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-12e65.firebaseio.com/",
});

export default instance;
