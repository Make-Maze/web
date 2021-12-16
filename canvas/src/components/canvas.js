import React, {useRef, useEffect, useState} from "react";
import Block from './block'
import SideBar from "./sidebar";
import Toolbar from "./toolline";
import domtoimage from "dom-to-image";
import {saveAs} from "file-saver";
import CanvasCss from '../css/canvas.css'

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const blockRef = useRef(null);

  let list = new Array(20);
  for(let i = 0; i < 20; i++){
    list[i] = new Array(100).fill(0)
  }
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [x, setX] = useState(0);
  const[y, setY] = useState(0);
  const[map] = useState(list);
  const[height, setHeight] = useState();
  const[width, setWidth] = useState();
  const[del, setDel] = useState(0);
  const[drawMode, setDraw] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    setHeight(canvas.height);
    setWidth(canvas.width);

    const context = canvas.getContext("2d");
    // context.strokeStyle = "red";
    // context.lineWidth = 10;
    contextRef.current = context;

    setCtx(contextRef.current);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({nativeEvent}) => {
    let {offsetX, offsetY} = nativeEvent;
    setX(Math.floor(100 / ((window.innerWidth - 100) * 0.6) * offsetX));
    setY(Math.floor(100 / ((window.innerHeight - 300) * 2) * offsetY));
    if(ctx){
      // if(!isDrawing){
      //   ctx.beginPath();
      //   ctx.moveTo(offsetX, offsetY);
      // } else{
      //   ctx.lineTo(offsetX, offsetY);
      //   ctx.stroke();
      // }
    }
  };

  const downroad = () =>{
    const canvas = blockRef.current;
    const data = new FormData();
    domtoimage.toBlob(canvas).then((blob) => {
      // data.append("file", blob)
      saveAs(blob, "img.png");
    });
    // data.append("array", map)
    // for(let item of data.entries()){
    //   console.log(item[0] + ", " + item[1]);
    // }
  };

  return(
    <div>
      <div
      className="canvas_wrap"
      style={{position: "relative", display: "flex", width: window.innerWidth, margin: "0 auto"}}>
        <div ref={blockRef}>
          <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={drawing}
          onMouseLeave={finishDrawing}>
          </canvas>
          <Block x={x} y={y} isDrawing={isDrawing} map={map} width={width} height={height} select={props.select} delete={del} delMode={function(_del){setDel(_del)}} drawMode={drawMode}></Block>
        </div>
        <SideBar
         select={props.select}
         delet={del} 
         delMode={function(_del){
          setDel(_del);
        }}
         drawMode={function(_draw){
          setDraw(_draw);
         }}></SideBar>
      </div>
      <Toolbar select={props.select} onSelect={function(_select){
        props.onSelectChange(_select);
      }}></Toolbar>
      <button onClick={function(){
          downroad();
        }}>저장하기</button>
    </div>
  );
}

export default Canvas;