import React, { useRef, useEffect, useState } from 'react'
import Block from './block'
import SideBar from './sidebar'
import Toolbar from './toolbar'
import '../css/canvas.css'
import { useResultContext } from '../../Context/Data'

const Canvas = props => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const blockRef = useRef(null)

  let list = new Array(40)
  for (let i = 0; i < 40; i++) {
    list[i] = new Array(100).fill(0)
  }
  const [ctx, setCtx] = useState()
  const [isDrawing, setIsDrawing] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [map] = useState(list)
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()
  const [item, setItem] = useState(false)
  const [drawMode, setDraw] = useState(0)
  const [select, setSelect] = useState('wall')

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
  }

  const finishDrawing = () => {
    setIsDrawing(false)
  }

  const drawing = ({ nativeEvent }) => {
    let { offsetX, offsetY } = nativeEvent
    setX(Math.floor((100 / ((window.innerWidth - 100) * 0.6)) * offsetX))
    setY(Math.floor((100 / (window.innerHeight - 300)) * offsetY))
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
  const { img, setImg, title, setTitle, view, setView, shared, setShared } =
    useResultContext()

  const [exTitle, setexTitle] = useState()

  return (
    <div>
      <div className="inputBox">
        <input
          type="text"
          onChange={e => {
            setShared({ ...shared, title: e.target.value })
            console.log(shared)
          }}
          className="titleBox"
          placeholder="미로 제목을 입력해 주세요"
        />
      </div>
      <div className="canvas_wrap">
        <div ref={blockRef}>
          <canvas
            className="canvas"
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
            select={select}
            setSelect={setSelect}
            setDraw={setDraw}
            drawMode={drawMode}
          ></Block>
        </div>
        <SideBar
          setSelect={setSelect}
          drawMode={function (_draw) {
            setDraw(_draw)
          }}
          item={item}
        ></SideBar>
      </div>
      <Toolbar
        setSelect={setSelect}
        blockRef={blockRef}
        item={item}
        setItem={setItem}
        map={map}
        exTitle={exTitle}
      ></Toolbar>
    </div>
  )
}

export default Canvas
