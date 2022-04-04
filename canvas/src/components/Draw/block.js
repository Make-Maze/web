import React from "react";
import "../../style/block.css";
import potal from "../../Assets/Item/potal.png";
import gunUp from "../../Assets/Item/gun_up.png";
import gunDown from "../../Assets/Item/gun_down.png";
import gunRight from "../../Assets/Item/gun_right.png";
import gunLeft from "../../Assets/Item/gun_left.png";
import gasi from "../../Assets/Item/gasi.png";
import potion from "../../Assets/Item/potion.png";
import start1 from "../../Assets/Item/start1.png";
import start2 from "../../Assets/Item/start2.png";
import start3 from "../../Assets/Item/start3.png";
import start4 from "../../Assets/Item/start4.png";
import end1 from "../../Assets/Item/end1.png";
import end2 from "../../Assets/Item/end2.png";
import end3 from "../../Assets/Item/end3.png";
import end4 from "../../Assets/Item/end4.png";
import block1 from "../../Assets/Item/block3.png";
import block2 from "../../Assets/Item/block2.png";
import block3 from "../../Assets/Item/block.png";
import block4 from "../../Assets/Item/block4.png";

const Block = (props) => {
  let i;
  let j;
  let list = [];
  window.localStorage.setItem("map", JSON.stringify(props.map))

  function isStartEnd() {
    if (
      props.isDrawing === true &&
      Math.floor(props.y / 2) !== -1 &&
      Math.floor(props.y / 2) !== 30 &&
      (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
      (Math.floor(props.y / 2) !== 0 || props.x !== 1) &&
      (Math.floor(props.y / 2) !== 1 || props.x !== 0) &&
      (Math.floor(props.y / 2) !== 1 || props.x !== 1) &&
      (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
      (Math.floor(props.y / 2) !== 28 || props.x !== 69) &&
      (Math.floor(props.y / 2) !== 29 || props.x !== 68) &&
      (Math.floor(props.y / 2) !== 28 || props.x !== 68)
    ) {
      return true;
    }
    return false;
  }

  function pushList(index) {
    let blockCase = null;
    switch (index) {
      case 1:
        blockCase = block1; break
      case 2:
        blockCase = block2; break
      case 3:
        blockCase = block3; break
      case 4:
        blockCase = block4; break
      case 5:
        blockCase = gunUp; break
      case 6:
        blockCase = gunDown; break
      case 7:
        blockCase = gunRight; break
      case 8:
        blockCase = gunLeft; break
      case 9:
        blockCase = potal; break
      case 13:
        blockCase = potion; break
      case 14:
        blockCase = gasi; break
      case 91:
        blockCase = start1; break
      case 92:
        blockCase = start2; break
      case 93:
        blockCase = start3; break
      case 94:
        blockCase = start4; break
      case 95:
        blockCase = end1; break
      case 96:
        blockCase = end2; break
      case 97:
        blockCase = end3; break
      case 98:
        blockCase = end4; break
    }
    if (blockCase != null) {
      list.push(
        <td
          class="map"
          style={{
            border: "1px solid gray ",
            padding: "0px",
          }}
        >
          <img alt="" src={blockCase}></img>
        </td>,
      );
    }
    else {
      list.push(
        <td
          class="map"
          style={{
            border: "1px solid gray ",
            padding: "0px",
          }}
        >
        </td>,
      );
    }
  }

  function drawBlock(drawNumber) {
    if (drawNumber == 9) {
      props.potalInfo[props.potalInfo.length] = [Math.floor(props.y / 2), props.x];
    }
    props.map[Math.floor(props.y / 2)][props.x] = drawNumber;
  }

  // 벽인지 확인
  if (isStartEnd() && props.select === "wall") {
    drawBlock(props.drawMode + 1)
  }

  // item인지 확인
  if (isStartEnd() && props.select === "item") {
    drawBlock(props.drawMode + 1)
  }

  //del인지 확인
  if (isStartEnd() && props.select === "del") {
    for (let i = 0; i < props.potalInfo.length; i++) {
      if (
        props.potalInfo[i][0] === Math.floor(props.y / 2) &&
        props.potalInfo[i][1] === props.x
      ) {
        props.potalInfo.splice(i, 2);
        break;
      }
    }
    props.map[Math.floor(props.y / 2)][props.x] = 0;
  } else if (props.select === "Alldel") {
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
  }

  for (i = 0; i < 30; i++) {
    if (i !== 0) {
      list.push(<tr></tr>);
    }
    for (j = 0; j < 70; j++) {
      pushList(props.map[i][j]);
    }
  }

  return (
    <div>
      <table
        style={{
          borderCollapse: "collapse",
          borderStyle: "none",
          padding: "0px",
          border: "3px solid black",
        }}
      >
        {list}
      </table>
    </div>
  );
};

export default Block;