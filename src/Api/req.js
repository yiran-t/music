import axios from "axios";
// const URL = "https://net-music.penkuoer.com";
export const req = (url, data) => {
  return axios({
    url: "https://net-music.penkuoer.com" + url,
    method: data ? "POST" : "GET",
    data,
  });
};
