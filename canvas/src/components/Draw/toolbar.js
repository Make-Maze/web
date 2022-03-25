import React from "react";
import "../../style/toolbar.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useRecoilState } from "recoil";
import { GoogleId, Title } from "../../Atoms/";

const Toolbar = (props) => {
  const map = props.map;
  const [title, setTitle] = useRecoilState(Title);
  const [googleId, setGoogleId] = useRecoilState(GoogleId);
  const make = () => {
    let potal_state = 0;
    let map_state = 0;
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 70; j++) {
        if (map[i][j] === 9) {
          potal_state++;
        } else if (map[i][j] === 0) {
          map_state++;
        }
      }
    }

    let jsonArray = new Array();
    let potalObject = {};
    let potalObject1 = {};
    let potalObject2 = {};
    let mode = 0;
    for (let i = 0; i < props.potalInfo.length; i += 2) {
      if (mode === 1) {
        console.log(potalObject1);
        potalObject2 = {
          x2: props.potalInfo[i][0],
          y2: props.potalInfo[i][1],
        };
        potalObject = {
          ...potalObject1,
          ...potalObject2,
        };
        potalObject = JSON.stringify(potalObject);
        jsonArray.push(JSON.parse(potalObject));
        mode = 0;
      } else {
        potalObject1 = {
          kind: 9,
          x: props.potalInfo[i][0],
          y: props.potalInfo[i][1],
        };
        mode = 1;
      }
    }

    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 70; j++) {
        let testObject = new Object();
        if (map[i][j] !== 0 && map[i][j] !== 9) {
          testObject = {
            kind: map[i][j],
            x: j,
            y: 39 - i,
          };
          testObject = JSON.stringify(testObject);
          jsonArray.push(JSON.parse(testObject));
        }
      }
    }
    console.log(jsonArray);
    let mapJSON = new Object();
    mapJSON = JSON.stringify(jsonArray);
    console.log(mapJSON);
    console.log(title);

    if (potal_state % 2 !== 0) {
      toast.error("포탈은 짝수개여야 합니다");
    } else if (title === "") {
      toast.error("제목을 붙여주세요");
    } else if (map_state === 2092) {
      toast.error("맵을 다 그려 주세요");
    } else {
      // 구글 아이디가 googleId인 사용자의 맵 추가

      axios({
        url: "/map/add",
        method: "post",
        data: {
          mapName: title,
          block: mapJSON,
        },
      })
        .then((res) => {
          props.setBtn("btn_open");
          toast.success("저장 완료");
          for (let i = 0; i < 30; i++) {
            props.map[i].fill(0);
          }

          props.potalInfo.splice(0, props.potalInfo.length);
          // 전체 지우고 난 후 자동으로 브러쉬 선택
          props.setDraw(0);
          props.setSelect("wall");
          props.map[0][0] = 91;
          props.map[0][1] = 92;
          props.map[1][0] = 93;
          props.map[1][1] = 94;
          props.map[28][68] = 95;
          props.map[28][69] = 96;
          props.map[29][68] = 97;
          props.map[29][69] = 98;

          setTitle("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("미로 생성을 실패하였습니다.");
        });
    }
  };

  return (
    <div className="toolbar">
      <button
        onClick={function (e) {
          e.preventDefault();
          props.setSelect("del");
        }}
      >
        지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault();
          props.setSelect("Alldel");
        }}
      >
        전체 지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault();
          props.setSelect("wall");
          props.setItem(false);
        }}
      >
        벽
      </button>
      <button
        onClick={function (e) {
          e.preventDefault();
          props.setSelect("item");
          props.setItem(true);
        }}
      >
        아이템
      </button>
      <button onClick={make}>만들기</button>
    </div>
  );
};

export default Toolbar;
