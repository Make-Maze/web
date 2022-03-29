import axios from "axios";

class Member {
  me() {
    try {
      return axios({
        method: "GET",
        url: "/member/me",
      });
    } catch (e) {
      throw e;
    }
  }
}

export default new Member();
