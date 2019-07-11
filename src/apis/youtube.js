import axios from "axios";

const KEY = "AIzaSyDWBvMLkxh9tW5AvoDSevbLobVOglRWj3w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
