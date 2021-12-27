import React from 'react'
import '../css/sidebar.css'
import potal from '../../Assets/Item/potal.png'
import guard from '../../Assets/Item/guard.png'
import gunUp from '../../Assets/Item/gun_up.png'
import gunDown from '../../Assets/Item/gun_down.png'
import gunRight from '../../Assets/Item/gun_right.png'
import gunLeft from '../../Assets/Item/gun_left.png'
import gasi from '../../Assets/Item/gasi.png'
import spring from '../../Assets/Item/spring.png'
import invisible from '../../Assets/Item/invisible.png'


const SideBar = props => {
  let _content = []

  if(!props.item){
    _content.push(
      <div
        className="blackCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(0)
          props.setSelect('wall')
        }}
      ></div>
    )
    _content.push(
      <div
        className="redCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(1)
          props.setSelect('wall')
        }}
      ></div>
    )
    _content.push(
      <div
        class="yellowCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(2)
          props.setSelect('wall')
        }}
      ></div>
    )
    _content.push(
      <div
        class="greenCircle"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(3)
          props.setSelect('wall')
        }}
      ></div>
    )
  }else{
    _content.push(
      <div
        className="gunUp"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(4)
          props.setSelect('item')
        }}
      >
        <img src={gunUp}></img>
      </div>
    )
    _content.push(
      <div
        className="gunDown"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(5)
          props.setSelect('item')
        }}
      >
        <img src={gunDown}></img>
      </div>
    )
    _content.push(
      <div
        className="gunRight"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(6)
          props.setSelect('item')
        }}
      >
        <img src={gunRight}></img>
      </div>
    )
    _content.push(
      <div
        className="gunLeft"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(7)
          props.setSelect('item')
        }}
      >
        <img src={gunLeft}></img>
      </div>
    )
    _content.push(
      <div
        className="potal"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(8)
          props.setSelect('item')
        }}
      >
        <img src={potal}></img>
      </div>
    )
    _content.push(
      <div
        className="guard"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(9)
          props.setSelect('item')
        }}
      >
        <img src={guard}></img>
      </div>
    )
    _content.push(
      <div
        className="spring"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(10)
          props.setSelect('item')
        }}
      >
        <img src={spring}></img>
      </div>
    )
    _content.push(
      <div
        className="invisible"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(11)
          props.setSelect('item')
        }}
      >
        <img src={invisible}></img>
      </div>
    )
  }


  return <div className="sidebar">{_content}</div>
}

export default SideBar
