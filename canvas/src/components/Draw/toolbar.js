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

  let save_title
  let save_map

  const save = () => {
    let potal_state = 0
    let map_state = 0
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 70; j++) {
        if (map[i][j] === 9) {
          potal_state++
        } else if (map[i][j] === 0) {
          map_state++
        }
      }
    }
    if (potal_state % 2 !== 0) {
      toast.error('포탈은 짝수개여야 합니다')
    } else if (title === undefined) {
      toast.error('제목을 붙여주세요')
    } else if (map_state === 2092) {
      toast.error('맵을 다 그려 주세요')
    } else {
      props.setBtn('btn_open')
      toast.success('저장 완료 ✌✌')
    }
    let jsonArray = new Array()

    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 70; j++) {
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
    console.log(mapJSON)
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
        console.log(mapData)
      })
      .catch(err => {
        console.log(err)
        toast.error('저장 실패 😭😭')
      })
    console.log(jsonArray)
  }

  const share = () => {
    if (props.btn === 'btn_lock') {
      toast.error(`저장하기를 먼저 해주세요`)
    } else {
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
          props.setBtn('btn_lock')
          console.log(shared)
        })
        .catch(err => {
          console.log(err)
          toast.error('공유 실패 😭😭')
        })
    }
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
          props.setSelect('wall')
          props.setItem(false)
        }}
      >
        벽
      </button>
      <button
        onClick={function (e) {
          e.preventDefault()
          props.setSelect('item')
          props.setItem(true)
        }}
      >
        아이템
      </button>
      <button onClick={save}>저장하기</button>
      <button onClick={share} className={props.btn}>
        공유하기
      </button>
    </div>
  )
}

export default Toolbar
