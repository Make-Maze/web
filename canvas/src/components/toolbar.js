import React from 'react'
import '../css/toolbar.css'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

const Toolbar = props => {
  const canvas = props.blockRef.current
  const download = props => {
    const data = new FormData()
    domtoimage.toBlob(canvas).then(blob => {
      // data.append("file", blob)
      saveAs(blob, 'img.png')
    })
    // data.append("array", map)
    // for(let item of data.entries()){
    //   console.log(item[0] + ", " + item[1]);
    // }
  }

  return (
    <div className="toolbar">
      <button
        onClick={function (e) {
          e.preventDefault()
          props.onSelect('del')
          props.delMode(0)
        }}
      >
        지우기
      </button>
      <button
        onClick={function (e) {
          e.preventDefault()
          props.onSelect('del')
          props.delMode(1)
        }}
      >
        전체 지우기
      </button>
      <button
        onClick={function () {
          download()
        }}
      >
        저장하기
      </button>
    </div>
  )
}

export default Toolbar
