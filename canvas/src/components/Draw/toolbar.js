import React, { useEffect, useState } from 'react'
import '../css/toolbar.css'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'
import axios from 'axios'

const Toolbar = props => {
  const canvas = props.blockRef.current
  const map = props.map
  const {
    title,
    saved,
    setSaved,
    shared,
    setShared,
    mapData,
    setMapData,
    googleId,
  } = useResultContext()

  function save() {
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

    let mapJSON = new Object()
    mapJSON = JSON.stringify(jsonArray)
    console.log(mapJSON)
    axios
      .post(`http://192.168.137.6:8888/map/${googleId}`, {
        block: mapJSON,
        mapName: title,
      })
      .then(function (res) {
        console.log(res)
        setMapData({
          ...mapData,
          mapId: res.data.mapId,
          mapName: res.data.mapName,
          mapCode: res.data.mapCode,
          block: res.data.block,
          // img: res.data.image,
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
    axios
      .post(`http://192.168.137.6:8888/map/${googleId}`, {
        block: map.block,
        mapName: map.mapName,
      })
      .then(function (res) {
        console.log(mapData)
        console.log(res)
        setShared(shared.concat({ mapData }))
        toast.success('공유 완료 ✌✌')
        console.log(shared)
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
