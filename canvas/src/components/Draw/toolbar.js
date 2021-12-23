import React from 'react'
import '../css/toolbar.css'
import domtoimage from 'dom-to-image'
import { useResultContext } from '../../Context/Data'

const Toolbar = props => {
  const canvas = props.blockRef.current
  const map = props.map
  const { setImg, title, setTitle } = useResultContext()

  const save = () => {}

  const share = () => {
    domtoimage
      .toBlob(canvas)
      .then(blob => {
        const objectURL = URL.createObjectURL(blob)
        setImg(objectURL)
        console.log(objectURL)
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
    const jsonArray = new Array()
    // const sendJson = new Array()
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 100; j++) {
        let jsonObject = new Object()
        if (map[i][j] !== 0) {
          jsonObject = [map[i][j], i, j]
          jsonObject = JSON.stringify(jsonObject)
          jsonArray.push(JSON.parse(jsonObject))
        }
      }
    }
    let jsonObject = new Object()
    setTitle(props.exTitle)
    jsonObject.mapName = title
    jsonObject.blocks = jsonArray
    jsonObject = JSON.stringify(jsonObject)
    console.log('여기', jsonObject)
  }
  return (
    <div className="toolbar">
      <button
        onClick={function (e) {
          e.preventDefault()
          props.onSelect('del')
          props.delMode(0)
        }}
      >
        지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault()
          props.onSelect('del')
          props.delMode(1)
        }}
      >
        전체 지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault()
          props.onSelect()
          props.setItem(!props.item)
        }}
      >
        아이템
      </button>
      <button onClick={save}>저장하기</button>
      <button onClick={share}>공유하기</button>
    </div>
  )
}

export default Toolbar
