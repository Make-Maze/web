import axios from "axios";
import { toast } from "react-toastify";

class Like {
  add(mapId) {
    try {
      return axios({
        method: "POST",
        url: "/like/add",
        data: { mapId },
      });
    } catch (e) {
      toast.error("저장 실패");
      throw e;
    }
  }

  getLikes() {
    try {
      return axios({
        method: "GET",
        url: "/like/getLikes",
      });
    } catch (e) {
      throw e;
    }
  }

  delete(likeId) {
    try {
      return axios({
        method: "DELETE",
        url: `/like/delete/${likeId}`,
      });
    } catch (e) {
      toast.error("삭제 실패");
      throw e;
    }
  }
}

export default new Like();
