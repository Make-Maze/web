import React from "react";
import "../../Style/block.css";
import potal from "../../Assets/Item/potal.png";
import guard from "../../Assets/Item/guard.png";
import gunUp from "../../Assets/Item/gun_up.png";
import gunDown from "../../Assets/Item/gun_down.png";
import gunRight from "../../Assets/Item/gun_right.png";
import gunLeft from "../../Assets/Item/gun_left.png";
import gasi from "../../Assets/Item/gasi.png";
import invisible from "../../Assets/Item/invisible_lock.png";
import invisible_block from "../../Assets/Item/invisible_block.png";
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

  // 벽인지 확인
  if (isStartEnd() && props.select === "wall" && props.drawMode === 0) {
    props.map[Math.floor(props.y / 2)][props.x] = 1;
  } else if (isStartEnd() && props.select === "wall" && props.drawMode === 1) {
    props.map[Math.floor(props.y / 2)][props.x] = 2;
  } else if (isStartEnd() && props.select === "wall" && props.drawMode === 2) {
    props.map[Math.floor(props.y / 2)][props.x] = 3;
  } else if (isStartEnd() && props.select === "wall" && props.drawMode === 3) {
    props.map[Math.floor(props.y / 2)][props.x] = 4;
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

  if (isStartEnd() && props.select === "item" && props.drawMode === 4) {
    props.map[Math.floor(props.y / 2)][props.x] = 5;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 5) {
    props.map[Math.floor(props.y / 2)][props.x] = 6;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 6) {
    props.map[Math.floor(props.y / 2)][props.x] = 7;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 7) {
    props.map[Math.floor(props.y / 2)][props.x] = 8;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 8) {
    props.potalInfo[props.potalInfo.length] = [
      Math.floor(props.y / 2),
      props.x,
    ];
    props.map[Math.floor(props.y / 2)][props.x] = 9;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 9) {
    props.map[Math.floor(props.y / 2)][props.x] = 10;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 10) {
    props.map[Math.floor(props.y / 2)][props.x] = 11;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 11) {
    props.map[Math.floor(props.y / 2)][props.x] = 12;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 12) {
    props.map[Math.floor(props.y / 2)][props.x] = 13;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 13) {
    props.map[Math.floor(props.y / 2)][props.x] = 14;
  } else if (isStartEnd() && props.select === "item" && props.drawMode === 14) {
    props.map[Math.floor(props.y / 2)][props.x] = 15;
  }

  for (i = 0; i < 30; i++) {
    if (i !== 0) {
      list.push(<tr></tr>);
    }
    for (j = 0; j < 70; j++) {
      if (props.map[i][j] === 1) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray ",
              padding: "0px",
            }}
          >
            <img alt="" src={block1}></img>
          </td>,
        );
      } else if (props.map[i][j] === 2) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={block2}></img>
          </td>,
        );
      } else if (props.map[i][j] === 3) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
              backgroundColor: "#F8E68C",
            }}
          >
            <img alt="" src={block3}></img>
          </td>,
        );
      } else if (props.map[i][j] === 4) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
              backgroundColor: "green",
            }}
          >
            <img alt="" src={block4}></img>
          </td>,
        );
      } else if (props.map[i][j] === 5) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={gunUp}></img>
          </td>,
        );
      } else if (props.map[i][j] === 6) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={gunDown}></img>
          </td>,
        );
      } else if (props.map[i][j] === 7) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={gunRight}></img>
          </td>,
        );
      } else if (props.map[i][j] === 8) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={gunLeft}></img>
          </td>,
        );
      } else if (props.map[i][j] === 9) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={potal}></img>
          </td>,
        );
      } else if (props.map[i][j] === 10) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={guard}></img>
          </td>,
        );
      } else if (props.map[i][j] === 12) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={invisible}></img>
          </td>,
        );
      } else if (props.map[i][j] === 13) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={potion}></img>
          </td>,
        );
      } else if (props.map[i][j] === 14) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={gasi}></img>
          </td>,
        );
      } else if (props.map[i][j] === 15) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={invisible_block}></img>
          </td>,
        );
      } else if (props.map[i][j] === 91) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={start1}></img>
          </td>,
        );
      } else if (props.map[i][j] === 92) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={start2}></img>
          </td>,
        );
      } else if (props.map[i][j] === 93) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={start3}></img>
          </td>,
        );
      } else if (props.map[i][j] === 94) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={start4}></img>
          </td>,
        );
      } else if (props.map[i][j] === 95) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={end1}></img>
          </td>,
        );
      } else if (props.map[i][j] === 96) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={end2}></img>
          </td>,
        );
      } else if (props.map[i][j] === 97) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={end3}></img>
          </td>,
        );
      } else if (props.map[i][j] === 98) {
        list.push(
          <td
            class="map"
            style={{
              border: "1px solid gray",
              padding: "0px",
            }}
          >
            <img alt="" src={end4}></img>
          </td>,
        );
      } else {
        list.push(
          <td
            class="map"
            style={{ border: "1px solid gray", padding: "0px" }}
          ></td>,
        );
      }
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
