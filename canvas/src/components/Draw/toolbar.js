import React, { useEffect, useState } from 'react'
import '../css/toolbar.css'
import domtoimage from 'dom-to-image'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'
import axios from 'axios'

const Toolbar = props => {
  const canvas = props.blockRef.current
  const map = props.map
  const { img, setImg, title, setTitle } = useResultContext()

  const save = () => {
    toast.success(`저장 완료 마이페이지를 확인해보세요`)
  }

  const share = () => {
    // 제목란이 비어있으면 실행 x
    if (props.exTitle !== undefined) {
      console.log(props.exTitle)
      domtoimage
        .toBlob(canvas)
        .then(blob => {
          const objectURL = URL.createObjectURL(blob)
          setImg(objectURL)
          toast.success('공유 완료 ✌✌')
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
          toast.error('공유 실패 😭😭')
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
      jsonObject.mapName = props.title
      jsonObject.blocks = jsonArray
      jsonObject = JSON.stringify(jsonObject)
      console.log('여기', jsonObject)

      // axios({
      //   url: 'api',
      //   method: 'post',
      //   data: 'jsonObject',
      // })
      //   .then(res => console.log(res))
      //   .catch(err => {
      //     console.log(err)
      //   })
    } else {
      toast.error('제목을 입력해 주세요.')
      console.log('asd')
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
