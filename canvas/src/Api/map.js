import axios from "axios";
import { toast } from "react-toastify";

class Map {
  add(title, mapJSON) {
    try {
      const data = {
        mapName: title,
        block: mapJSON,
      };
      return axios({
        method: "POST",
        url: "/map/add",
        data: data,
      });
    } catch (e) {
      toast.error("생성 실패");
      throw e;
    }
  }

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
