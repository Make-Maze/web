import React, { useRef, useEffect, useState } from 'react'
import Block from './block'
import SideBar from './sidebar'
import Toolbar from './toolbar'
import '../css/canvas.css'

const Canvas = props => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const blockRef = useRef(null)

  //전체 맵
  let list = new Array(30)
  for (let i = 0; i < 30; i++) {
    list[i] = new Array(70).fill(0)
  }
  list[0][0] = 91
  list[0][1] = 92
  list[1][0] = 93
  list[1][1] = 94
  list[28][68] = 95
  list[28][69] = 96
  list[29][68] = 97
  list[29][69] = 98

  //포탈 좌표
  let list2 = new Array()
  const [ctx, setCtx] = useState()
  const [isDrawing, setIsDrawing] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [map] = useState(list)
  const [potalInfo] = useState(list2)
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()
  const [item, setItem] = useState(false)
  const [drawMode, setDraw] = useState(0)
  const [select, setSelect] = useState('wall')
  const [btn, setBtn] = useState('btn_lock')


  useEffect(() => {
    const canvas = canvasRef.current

    setHeight(canvas.height)
    setWidth(canvas.width)

    const context = canvas.getContext('2d')
    contextRef.current = context

    setCtx(contextRef.current)
  }, [])

  const startDrawing = () => {
    setIsDrawing(true)
    setBtn('btn_lock')
  }

  const finishDrawing = () => {
    setIsDrawing(false)
  }

  const drawing = ({ nativeEvent }) => {
    let { offsetX, offsetY } = nativeEvent
    setX(Math.floor((100 / ((window.innerWidth - 100) * 1.15)) * offsetX))
    setY(Math.floor((100 / (window.innerHeight - 300) * 0.46) * offsetY))
    if (ctx) {
      // if(!isDrawing){
      //   ctx.beginPath();
      //   ctx.moveTo(offsetX, offsetY);
      // } else{
      //   ctx.lineTo(offsetX, offsetY);
      //   ctx.stroke();
      // }
    }
  }
  const [exTitle, setexTitle] = useState()

  return (
    <div>
      <div className="inputBox">
        <input
          type="text"
          onChange={function(e){
            setexTitle(e.target.value)
            setBtn('btn_lock')
          }}
          className="titleBox"
          placeholder="미로 제목을 입력해 주세요"
        />
      </div>
      <div className="canvas_wrap">
        <div ref={blockRef}>
          <canvas
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
            drawMode={drawMode}
          ></Block>
        </div>
        <SideBar
          draw={drawMode}
          setSelect={setSelect}
          drawMode={function (_draw) {
            setDraw(_draw)
          }}
          item={item}
        ></SideBar>
      </div>
      <Toolbar
        btn={btn}
        setBtn={setBtn}
        setSelect={setSelect}
        blockRef={blockRef}
        item={item}
        setItem={setItem}
        map={map}
        potalInfo={potalInfo}
        exTitle={exTitle}
      ></Toolbar>
    </div>
  )
}

export default Canvas
