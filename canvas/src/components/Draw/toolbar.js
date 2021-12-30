import React, { useEffect, useState } from 'react'
import '../css/toolbar.css'
import domtoimage from 'dom-to-image'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'
import axios from 'axios'

const Toolbar = props => {
  const canvas = props.blockRef.current
  const map = props.map
  const {
    title,
    img,
    setImg,
    saved,
    setSaved,
    shared,
    setShared,
    mapData,
    setMapData,
    user_id,
  } = useResultContext()

  const save = () => {
    let jsonArray = new Array()
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 100; j++) {
        let testObject = new Object()
        if (map[i][j] !== 0) {
          testObject = [map[i][j], i, j]
          testObject = JSON.stringify(testObject)
          jsonArray.push(JSON.parse(testObject))
        }
      }
    }
    let content = new Object()
    content = JSON.stringify(jsonArray)
    console.log(content)
    const testObject = new Object()
    testObject.block = content
    testObject.mapName = title
    console.log(testObject)

    axios
      .post(`http://192.168.137.195:8888/map/${user_id}`, {
        blocks: content,
        mapName: title,
      })
      .then(function (res) {
        setMapData({
          ...mapData,
          mapId: res.data.mapId,
          block: res.data.block,
          image: res.data.image,
          mapCode: res.data.mapCode,
        })
        setSaved(saved.concat({ ...mapData }))
        toast.success('저장 완료 ✌✌')
      })
      .catch(err => {
        console.log(err)
        toast.error('저장 실패 😭😭')
      })
  }

  const share = () => {
    // 서버로 전송할 맵 좌표 만들기
    let jsonArray = new Array()
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 100; j++) {
        let testObject = new Object()
        if (map[i][j] !== 0) {
          testObject = [map[i][j], i, j]
          testObject = JSON.stringify(testObject)
          jsonArray.push(JSON.parse(testObject))
        }
      }
    }
    let content = new Object()
    content = JSON.stringify(jsonArray)
    console.log(content)

    domtoimage.toBlob(canvas).then(blob => {
      const objectURL = URL.createObjectURL(blob)
      setImg(objectURL)
    })

    axios
      .post(`http://192.168.137.195:8888/map/${user_id}`, {
        blocks: content,
        mapName: title,
      })
      .then(function (res) {
        setMapData({
          ...mapData,
          mapId: res.data.mapId,
          block: res.data.block,
          image: res.data.image,
          mapCode: res.data.mapCode,
        })
        setSaved(saved.concat({ ...mapData }))
        toast.success('공유 완료 ✌✌')
      })
      .catch(err => {
        console.log(err)
        toast.error('공유 실패 😭😭')
      })
  }

  return (
    <div className="toolbar">
      <button
        onClick={function (e) {
          e.preventDefault()
          props.setSelect('del')
        }}
      >
        지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault()
          props.setSelect('Alldel')
        }}
      >
        전체 지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault()
          props.setSelect()
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
