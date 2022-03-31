import axios from "axios";

class Auth {
  // 로그인
  login(email, password, name, img) {
    try {
      const data = {
        email,
        password,
        name,
        img,
      };
      return axios({
        method: "POST",
        url: "/auth/login",
        data,
      });
    } catch (e) {
      throw e;
    }
  }

  reissue(accessToken, refreshToken) {
    try {
      const data = {
        accessToken,
        refreshToken,
      };
      return axios({
        method: "POST",
        url: "/auth/reissue",
        data,
      });
    } catch (e) {
      throw e;
    }
  }
}

export default new Auth();
