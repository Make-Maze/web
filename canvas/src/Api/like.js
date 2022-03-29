import axios from "axios";
import { toast } from "react-toastify";

class Like {
  // 다른 사람의 미로를 저장
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

  // 사용자가 저장한 미로를 불러옴
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

  // 저장한 미로를 삭제
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
