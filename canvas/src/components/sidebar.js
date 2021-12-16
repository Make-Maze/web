import React from 'react'
import '../css/sidebar.css'
import Canvas from './canvas'

const SideBar = props => {
  let _content = []
  if (props.select === 'del') {
    _content.push(
      <button
        onClick={function (e) {
          e.preventDefault()
          props.delMode(0)
        }}
      >
        삭제
      </button>
    )
    _content.push(
      <button
        onClick={function (e) {
          e.preventDefault()
          props.delMode(1)
        }}
      >
        완전삭제
      </button>
    )
  } else if (props.select === 'wall') {
    _content.push(
      <div
        className="blackCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(0)
        }}
      ></div>
    )
    _content.push(
      <div
        className="redCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(1)
        }}
      ></div>
    )
    _content.push(
      <div
        class="yellowCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(2)
        }}
      ></div>
    )
    _content.push(
      <div
        class="greenCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(3)
        }}
      ></div>
    )
  }

  return <div className="sidebar">{_content}</div>
}

export default SideBar
