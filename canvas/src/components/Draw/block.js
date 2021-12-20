import React from 'react'
import '../css/block.css'

const Block = props => {
  let i
  let j
  let list = []
  let delMode = props.delete

  // 벽인지 확인
  if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== 20 &&
    Math.floor(props.y / 2) !== -1 &&
    props.select === 'wall' &&
    props.drawMode === 0
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 1
  } else if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== 20 &&
    Math.floor(props.y / 2) !== -1 &&
    props.select === 'wall' &&
    props.drawMode === 1
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 2
  } else if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== 20 &&
    Math.floor(props.y / 2) !== -1 &&
    props.select === 'wall' &&
    props.drawMode === 2
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 3
  } else if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== 20 &&
    Math.floor(props.y / 2) !== -1 &&
    props.select === 'wall' &&
    props.drawMode === 3
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 4
  }

  //del인지 확인
  if (
    props.isDrawing === true &&
    Math.floor(props.y / 2) !== 20 &&
    Math.floor(props.y / 2) !== -1 &&
    props.select === 'del' &&
    delMode === 0
  ) {
    props.map[Math.floor(props.y / 2)][props.x] = 0
    console.log(123123)
  } else if (delMode === 1) {
    for (let i = 0; i < 20; i++) {
      props.map[i].fill(0)
    }
    props.delMode(0)
  }

  for (i = 0; i < 20; i++) {
    if (i !== 0) {
      list.push(<tr></tr>)
    }
    for (j = 0; j < 100; j++) {
      if (props.map[i][j] === 1) {
        list.push(
          <td
            classNmae="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
              backgroundColor: 'black',
            }}
          ></td>
        )
      } else if (props.map[i][j] === 2) {
        list.push(
          <td
            className="map"
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
            className="map"
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
            className="map"
            style={{
              border: '1px solid gray',
              padding: '0px',
              backgroundColor: 'green',
            }}
          ></td>
        )
      } else {
        list.push(
          <td
            className="map"
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
