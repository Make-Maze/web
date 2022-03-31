import axios from "axios";
import { toast } from "react-toastify";

class Map {
  // 맵 제작
  add(title, mapJSON) {
    try {
      const data = {
        mapName: title,
        block: mapJSON,
      };
      return axios({
        method: "POST",
        url: "/map/add",
        data,
      });
    } catch (e) {
      toast.error("생성 실패");
      throw e;
    }
  }

  // 모든 맵 불러오기
  AllMaps() {
    try {
      return axios({
        method: "GET",
        url: "/map/getAllMaps",
      });
    } catch (e) {
      throw e;
    }
  }

  // 로그인된 유저의 맵을 가져옴
  getMaps() {
    try {
      return axios({
        method: "GET",
        url: "/map/getMaps",
      });
    } catch (e) {
      throw e;
    }
  }

  // 맵 삭제
  delete(mapId) {
    try {
      return axios({
        method: "DELETE",
        url: `/map/delete/${mapId}`,
      });
    } catch (e) {
      toast.error("삭제 실패");
      throw e;
    }
  }
}

export default new Map();
