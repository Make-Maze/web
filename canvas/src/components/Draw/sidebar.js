import React from 'react'
import '../css/sidebar.css'

const SideBar = props => {
  let _content = []

  _content.push(
    <div
      className="blackCircle"
      onClick={function (e) {
        e.preventDefault()
        props.drawMode(0)
        props.onSelect('wall')
      }}
    ></div>
  )
  _content.push(
    <div
      className="redCircle"
      onClick={function (e) {
        e.preventDefault()
        props.drawMode(1)
        props.onSelect('wall')
      }}
    ></div>
  )
  _content.push(
    <div
      class="yellowCircle"
      onClick={function (e) {
        e.preventDefault()
        props.drawMode(2)
        props.onSelect('wall')
      }}
    ></div>
  )
  _content.push(
    <div
      class="greenCircle"
      onClick={function (e) {
        e.preventDefault()
        props.drawMode(3)
        props.onSelect('wall')
      }}
    ></div>
  )

  return <div className="sidebar">{props.item ? 'item' : 'sideBar'}</div>
}

export default SideBar
