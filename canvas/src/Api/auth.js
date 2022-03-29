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
        data: data,
      });
    } catch (e) {
      throw e;
    }
  }
}

export default new Auth();
