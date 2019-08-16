import { post } from "./request";

export function getYzm(phone) {
  return post("https://api.cat-shop.penkuoer.com/api/v2/proxy", {
    url: "https://net-music.penkuoer.com/captcha/sent",
    phone: phone,
  });
}
