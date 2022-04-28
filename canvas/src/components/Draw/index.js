import React, { useRef, useEffect, useState } from "react";
import Block from "./block";
import SideBar from "./sidebar";
import Toolbar from "./toolbar";
import "../../style/canvas.css";
import { useRecoilState } from "recoil";
import { Title } from "../../Atoms";
import Modal from "react-modal/lib/components/Modal";
import Button from "../Button";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const blockRef = useRef(null);

  function AllDel(){
    setModal(false)
    setAllDel(true)
  }

  //전체 맵
  let list = JSON.parse(window.localStorage.getItem("map"));
  if (list == null) {
    list = new Array(30);
    for (let i = 0; i < 30; i++) {
      list[i] = new Array(70).fill(0);
    }
    list[0][0] = 91;
    list[0][1] = 92;
    list[1][0] = 93;
    list[1][1] = 94;
    list[28][68] = 95;
    list[28][69] = 96;
    list[29][68] = 97;
    list[29][69] = 98;
  }

  let list2 = JSON.parse(window.localStorage.getItem("potal"));
  if (list2 == null) {
    list2 = new Array();
  }

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [map] = useState(list);
  const [potalInfo] = useState(list2);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [item, setItem] = useState(false);
  const [drawMode, setDraw] = useState(0);
  const [select, setSelect] = useState("wall");
  const [btn, setBtn] = useState("btn_lock");
  const [modal, setModal] = useState(false);
  const [isAllDel, setAllDel] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    setHeight(document.getElementById("map").offsetHeight);
    setWidth(document.getElementById("map").offsetWidth);

    const context = canvas.getContext("2d");
    contextRef.current = context;

    setCtx(contextRef.current);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
    setBtn("btn_lock");
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    let { offsetX, offsetY } = nativeEvent;
    setX(Math.floor(offsetX / (width / 70)));
    setY(Math.floor(offsetY / (height / 30)));
  };
  const [title, setTitle] = useRecoilState(Title);
  const customStyles={
    content:{
      width:"400px", 
      height:"400px", 
      position:"absolute", 
      display:"flex", 
      flexDirection:"column", 
      justifyContent:"center", 
      alignItems:"center", 
      margin:"100px auto"}
    }
  return (
    <div className="wrapper">
      <div className="inputBox">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="titleBox"
          placeholder="미로 제목을 입력해 주세요."
          value={title}
        />
      </div>
      <div className="canvas_wrap">
        <div ref={blockRef} className="container">
          <Modal
            style={customStyles}
            isOpen={modal}
            onRequestClose={()=>setModal(false)}
          >
            <h2>전체 지우기</h2>
            <p>정말로 전부 지우시겠습니까?</p>
            <div className="button_wrap">
              <Button onClick={AllDel} content={"네"}/>
              <Button onClick={()=>setModal(false)} content={"아니요"}/>
            </div>
          </Modal>
          <canvas
            id="map"
            className={select + drawMode}
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={drawing}
            onMouseLeave={finishDrawing}
          ></canvas>
          <Block
            x={x}
            y={y}
            isDrawing={isDrawing}
            map={map}
            potalInfo={potalInfo}
            select={select}
            setSelect={setSelect}
            setDraw={setDraw}
            setModal={setModal}
            drawMode={drawMode}
            setAllDel={setAllDel}
            isAllDel={isAllDel}
          ></Block>
        </div>
        <div class="sidebar_wrap">
          <SideBar
            draw={drawMode}
            setSelect={setSelect}
            drawMode={function (_draw) {
              setDraw(_draw);
            }}
            item={item}
          />
        </div>
      </div>
      <div class="toolbar_wrap">
        <Toolbar
          btn={btn}
          setBtn={setBtn}
          setSelect={setSelect}
          setDraw={setDraw}
          blockRef={blockRef}
          item={item}
          setItem={setItem}
          map={map}
          potalInfo={potalInfo}
        />
      </div>
    </div>
  );
};

export default Canvas;
