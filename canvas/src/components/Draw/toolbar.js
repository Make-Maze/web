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

  const { img, setImg, title, setTitle } = useResultContext()
  let save_title
  let save_map
  
  const save = () => {
    let potal_state = 0
    let map_state = 0
    for(let i = 0; i < 30; i++){
      for(let j = 0; j < 70; j++){
        if(map[i][j] === 9){
            potal_state++
        } else if(map[i][j] === 0){
          map_state++
        }
      }
    }
    if(potal_state % 2 !== 0){
      toast.error('포탈은 짝수개여야 합니다')
    } else if(props.exTitle === undefined){
      toast.error('제목을 붙여주세요')
    } else if(map_state === 2092){
      toast.error('맵을 다 그려 주세요')
    } else {
      toast.success(`저장 완료 마이페이지를 확인해보세요`)
      save_title = title
      save_map = map
      props.setBtn('btn_open')
    }
  }

  const share = () => {
    if(props.btn === 'btn_lock'){
      toast.error(`저장하기를 먼저 해주세요`)
    } else {
      domtoimage
          .toBlob(canvas)
          .then(blob => {
            const objectURL = URL.createObjectURL(blob)
            setImg(objectURL)
            toast.success('공유 완료 ✌✌')
            props.setBtn('btn_lock')
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error)
            toast.error('공유 실패 😭😭')
          })
  
        const jsonArray = new Array()
        let potalObject = new Object()
        for(let i = 0; i < props.potalInfo.length; i+=2){
          if(potalObject.length === 3){
            potalObject = potalObject.concat(props.potalInfo[i][0], props.potalInfo[i][1])
            potalObject = JSON.stringify(potalObject)
            jsonArray.push(JSON.parse(potalObject))
            potalObject = new Object()
          }
          else{
            potalObject = [9, props.potalInfo[i][0], props.potalInfo[i][1]]

          }
          testObject = JSON.stringify(testObject)
          jsonArray.push(JSON.parse(testObject))
        }

      }

        // const sendJson = new Array()
        for (let i = 0; i < 30; i++) {
          for (let j = 0; j < 70; j++) {
            if(map[i][j] !== 9 && map[i][j] !== 0){
              let jsonObject = new Object()
              jsonObject = [map[i][j], i, j]
              jsonObject = JSON.stringify(jsonObject)
              jsonArray.push(JSON.parse(jsonObject))
            }
          }
        }
        let jsonObject = new Object()
        setTitle(props.exTitle)
        jsonObject.mapName = props.title
        jsonObject.blocks = jsonArray
        jsonObject = JSON.stringify(jsonObject)
        console.log(jsonObject)
  
        // axios({
        //   url: 'api',
        //   method: 'post',
        //   data: 'jsonObject',
        // })
        //   .then(res => console.log(res))
        //   .catch(err => {
        //     console.log(err)
        //   })

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
      <button onClick={share} className={props.btn}>공유하기</button>
    </div>
  )
}

export default Toolbar
