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
    profile,
    img,
    setImg,
    saved,
    setSaved,
    shared,
    setShared,
    mapData,
    setMapData,
  } = useResultContext()

  const save = () => {
    domtoimage.toBlob(canvas).then(blob => {
      const objectURL = URL.createObjectURL(blob)
      setImg(objectURL)
      setMapData({ ...mapData, imgURL: URL.createObjectURL(blob) })
      setSaved(saved.concat({ ...mapData }))
      toast.success('저장 완료 ✌✌')
    })
  }

  const share = () => {
    const jsonArray = new Array()
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
    jsonObject = JSON.stringify(jsonObject)
    console.log('여기', jsonObject)

    domtoimage.toBlob(canvas).then(blob => {
      const objectURL = URL.createObjectURL(blob)
      setImg(objectURL)
    })

    axios
      .get(`map${profile.googleId}`, {
        mapId: '',
        img: img,
        content: jsonObject,
      })
      .then(function (res) {
        setMapData({ ...mapData, imgURL: img })
        setShared(shared.concat({ ...mapData }))
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
