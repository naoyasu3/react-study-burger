import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-33205.firebaseio.com/",
});

export default instance;
