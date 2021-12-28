import React from 'react'
import '../css/block.css'
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
import start from '../../Assets/Item/start.png'

const Block = props => {
  let i
  let j
  let list = []



  // 벽인지 확인
  if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'wall' &&
    props.drawMode === 0
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 1
  } else if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'wall' &&
    props.drawMode === 1
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 2
  } else if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'wall' &&
    props.drawMode === 2
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 3
  } else if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'wall' &&
    props.drawMode === 3
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 4
  }

  //del인지 확인
  if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'del'
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 0
  } else if (props.select === 'Alldel') {
    for (let i = 0; i < 30; i++) {
      props.map[i].fill(0)
    }
    // 전체 지우고 난 후 자동으로 브러쉬 선택
    props.setDraw(0)
    props.setSelect('wall')
    props.map[0][0] = 99
    props.map[29][69] = 100
  }

  if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 4
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 5
  } else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 5
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 6
  }else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 6
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 7
  }else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 7
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 8
  }else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 8
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 9
  }else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 9
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 10
  }else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 10
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 11
  }else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 11
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 12
  } else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 12
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 13
  } else if(
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== -1 &&
    (Math.floor(props.y / 2) !== 0 || props.x !== 0) &&
    (Math.floor(props.y / 2) !== 29 || props.x !== 69) &&
    props.select === 'item' &&
    props.drawMode === 13
  ){
    props.map[Math.floor(props.y / 2)][props.x] = 14
  }

  for (i = 0; i < 30; i++) {
    if (i !== 0) {
      list.push(<tr></tr>)
    }
    for (j = 0; j < 70; j++) {
      if (props.map[i][j] === 1) {
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray ',
              padding: '0px',
              backgroundColor: 'black',
            }}
          ></td>
        )
      } else if (props.map[i][j] === 2) {
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
              backgroundColor: '#FF8F8F',
            }}
          ></td>
        )
      } else if (props.map[i][j] === 3) {
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
              backgroundColor: '#F8E68C',
            }}
          ></td>
        )
      } else if (props.map[i][j] === 4) {
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
              backgroundColor: 'green',
            }}
          ></td>
        )
      } else if (props.map[i][j] === 5){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={gunUp}></img>
          </td>
        )
      }else if (props.map[i][j] === 6){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={gunDown}></img>
          </td>
        )
      }else if (props.map[i][j] === 7){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={gunRight}></img>
          </td>
        )
      }else if (props.map[i][j] === 8){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={gunLeft}></img>
          </td>
        )
      }else if (props.map[i][j] === 9){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={potal}></img>
          </td>
        )
      }else if (props.map[i][j] === 10){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={guard}></img>
          </td>
        )
      }else if (props.map[i][j] === 11){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={spring}></img>
          </td>
        )
      }else if (props.map[i][j] === 12){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={invisible}></img>
          </td>
        )
      }else if (props.map[i][j] === 13){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={potion}></img>
          </td>
        )
      }else if (props.map[i][j] === 14){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={gasi}></img>
          </td>
        )
      } else if (props.map[i][j] === 99){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <img src={start}></img>
          </td>
        )
      } else if (props.map[i][j] === 100){
        list.push(
          <td
            class="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
            }}
          >
            <p>도착</p>
          </td>
        )
      }else {
        list.push(
          <td
            class="map"
            style={{ border: '1px solid gray', padding: '0px' }}
          ></td>
        )
      }
    }
  }

  return (
    <div>
      <table
        style={{
          borderCollapse: 'collapse',
          borderStyle: 'none',
          padding: '0px',
          border: '3px solid black',
        }}
      >
        {list}
      </table>
    </div>
  )
}

export default Block
