import React, { useEffect, useState } from 'react'
import * as S from './style'
import axios from 'axios'

const Share = () => {
  const [list, setList] = useState('')
  const [show, setShow] = useState()
  const shareMap = e => {
    setShow(list)
  }
  // useEffect(() => {
  //   axios.get('').then().catch()
  // })
  return (
    <>
      <S.MainSection>
        <h1>
          다른 사람들의 <br />
          미로를 체험해봐요.
        </h1>
        <textarea type="text" onChange={e => setList(e.target.value)} />
        <button onClick={shareMap}>저장하기</button>
        {show}
      </S.MainSection>
    </>
  )
}

export default Share
