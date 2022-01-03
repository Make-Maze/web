import React, { useState } from 'react'
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
import invisible_block from '../../Assets/Item/invisible_block.png'
import potion from '../../Assets/Item/potion.png'

const SideBar = props => {
  let _content = []

  const [gun, setGun] = useState('up')

  if (!props.item) {
    if (props.draw >= 4) {
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
  } else {
    if (gun === 'up' || gun === 'upX') {
      if (gun === 'up') {
        props.drawMode(4)
      }
      _content.push(
        <div
          className="gun"
          onClick={function (e) {
            e.preventDefault()
            setGun('down')
            props.setSelect('item')
          }}
        >
          <a title="위쪽 대포">
            <img src={gunUp}></img>
          </a>
        </div>
      )
    } else if (gun === 'down' || gun === 'downX') {
      if (gun === 'down') {
        props.drawMode(5)
      }
      _content.push(
        <div
          className="gunDown"
          onClick={function (e) {
            e.preventDefault()
            setGun('right')
          }}
        >
          <a title="아래쪽 대포">
            <img src={gunDown}></img>
          </a>
        </div>
      )
    } else if (gun === 'right' || gun === 'rightX') {
      if (gun === 'right') {
        props.drawMode(6)
      }
      _content.push(
        <div
          className="gunRight"
          onClick={function (e) {
            e.preventDefault()
            setGun('left')
            props.setSelect('item')
          }}
        >
          <a title="오른쪽 대포">
            <img src={gunRight}></img>
          </a>
        </div>
      )
    } else if (gun === 'left' || gun === 'leftX') {
      if (gun === 'left') {
        props.drawMode(7)
      }
      _content.push(
        <div
          className="gunLeft"
          onClick={function (e) {
            e.preventDefault()
            setGun('up')
            props.setSelect('item')
          }}
        >
          <a title="왼쪽 대포">
            <img src={gunLeft}></img>
          </a>
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
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="포탈">
          <img src={potal}></img>
        </a>
      </div>
    )
    _content.push(
      <div
        className="guard"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(9)
          props.setSelect('item')
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="방패">
          <img src={guard}></img>
        </a>
      </div>
    )
    _content.push(
      <div
        className="spring"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(10)
          props.setSelect('item')
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="스프링">
          <img src={spring}></img>
        </a>
      </div>
    )
    _content.push(
      <div
        className="invisible"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(11)
          props.setSelect('item')
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="일회용 벽">
          <img src={invisible}></img>
        </a>
      </div>
    )
    _content.push(
      <div
        className="potion"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(12)
          props.setSelect('item')
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="속도포션">
          <img src={potion}></img>
        </a>
      </div>
    )
    _content.push(
      <div
        className="gasi"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(13)
          props.setSelect('item')
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="가시">
          <img src={gasi}></img>
        </a>
      </div>
    )
    _content.push(
      <div
        className="invisible_block"
        onClick={function (e) {
          e.preventDefault()
          props.drawMode(14)
          props.setSelect('item')
          if (!gun.includes('X')) {
            setGun(gun + 'X')
          }
        }}
      >
        <a title="투병벽">
          <img src={invisible_block}></img>
        </a>
      </div>
    )
  }

  return <div className="sidebar">{_content}</div>
}

export default SideBar
