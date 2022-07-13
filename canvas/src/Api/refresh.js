import axios from "axios";
import { useCookies } from "react-cookie";
import auth from "./auth";

const Refresh = () => {
  const [cookie, setCookie] = useCookies();
  console.log("hi");
  try {
    const res = auth.reissue(cookie.accessToken, cookie.refreshToken);
    setCookie("accessToken", res.accessToken, { path: "/" });
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.accessToken}`;
  } catch (e) {
    throw e;
  }
};

export default Refresh;
