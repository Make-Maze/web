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
    let potalObject = new Object()
    for (let i = 0; i < props.potalInfo.length; i += 2) {
      if (potalObject.length === 3) {
        potalObject = potalObject.concat(
          props.potalInfo[i][0],
          props.potalInfo[i][1]
        )
        potalObject = JSON.stringify(potalObject)
        jsonArray.push(JSON.parse(potalObject))
        potalObject = new Object()
      } else {
        potalObject = {
          kind: 9,
          x: props.potalInfo[i][0],
          y: props.potalInfo[i][1],
        }
      }
    }
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 100; j++) {
        let testObject = new Object()
        if (map[i][j] !== 0 && map[i][j] !== 9) {
          testObject = {
            kind: map[i][j],
            x: i,
            y: j,
          }
          testObject = JSON.stringify(testObject)
          jsonArray.push(JSON.parse(testObject))
        }
      }
    }

    let mapJSON = new Object()
    mapJSON = JSON.stringify(jsonArray)
    axios
      .post(`http://192.168.137.139:8888/map/${googleId}`, {
        block: mapJSON,
        mapName: title,
      })
      .then(res => {
        console.log(res)
        setMapData({
          block: res.data.block,
          img: sessionStorage.getItem('user_image'),
          mapId: res.data.mapId,
          mapCode: res.data.mapCode,
          mapName: res.data.mapName,
          userName: sessionStorage.getItem('user_name'),
        })
        setSaved(saved.concat(res.data))
        console.log(saved)
        toast.success('저장 완료 ✌✌')
        console.log(mapData)
      })
      .catch(err => {
        console.log(err)
        toast.error('저장 실패 😭😭')
      })
  }

  const share = () => {
    axios
      .post(`http://192.168.137.139:8888/map/${googleId}`, {
        block: mapData.block,
        mapName: mapData.mapName,
      })
      .then(function (res) {
        console.log(mapData)
        console.log(res)
        setShared(shared.concat(res.data))
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
