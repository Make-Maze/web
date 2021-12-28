import React, { useEffect, useState } from 'react'
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
import potion from '../../Assets/Item/potion.png'


const SideBar = props => {
  let _content = []

  const[gun,setGun] = useState('up');

  if(!props.item){
    if(props.draw){
      props.drawMode(0)
    }
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
    if(gun === 'up' || gun === 'upX'){
      if(gun === 'up'){
        props.drawMode(4)
        props.setSelect('item')
      }
      _content.push(
        <div
          className="gun"
          onClick={function (e) {
            e.preventDefault()
            setGun('down')
          }}
        >
          <img src={gunUp}></img>
        </div>
      )
    } else if(gun === 'down' || gun === 'downX'){
      if(gun === 'down'){
        props.drawMode(5)
        props.setSelect('item')
      }
      _content.push(
        <div
          className="gunDown"
          onClick={function (e) {
            e.preventDefault()
            setGun('right')
          }}
        >
          <img src={gunDown}></img>
        </div>
      )
    } else if(gun === 'right' || gun === 'rightX'){
      if(gun === 'right'){
        props.drawMode(6)
        props.setSelect('item')
      }
      _content.push(
        <div
          className="gunRight"
          onClick={function (e) {
            e.preventDefault()
            setGun('left')
          }}
        >
          <img src={gunRight}></img>
        </div>
      )
    } else if(gun === 'left' || gun === 'leftX'){
      if(gun === 'left'){
        props.drawMode(7)
        props.setSelect('item')
      }
      _content.push(
        <div
          className="gunLeft"
          onClick={function (e) {
            e.preventDefault()
            setGun('up')
          }}
        >
          <img src={gunLeft}></img>
        </div>
      )
    }
    _content.push(
      <div
        className="potal"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(8)
          props.setSelect('item')
          if(!gun.includes('X')){
            setGun(gun + 'X')
          }
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
          if(!gun.includes('X')){
            setGun(gun + 'X')
          }
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
          if(!gun.includes('X')){
            setGun(gun + 'X')
          }
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
          if(!gun.includes('X')){
            setGun(gun + 'X')
          }
        }}
      >
        <img src={invisible}></img>
      </div>
    )
    _content.push(
      <div
        className="potion"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(12)
          props.setSelect('item')
          if(!gun.includes('X')){
            setGun(gun + 'X')
          }
        }}
      >
        <img src={potion}></img>
      </div>
    )
    _content.push(
      <div
        className="gasi"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(13)
          props.setSelect('item')
          if(!gun.includes('X')){
            setGun(gun + 'X')
          }
        }}
      >
        <img src={gasi}></img>
      </div>
    )
  }


  return <div className="sidebar">{_content}</div>
}

export default SideBar
