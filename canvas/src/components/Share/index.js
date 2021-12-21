import React, { useEffect, useState } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'

const Share = () => {
  const [list, setList] = useState('')
  const [show, setShow] = useState()
  const shareMap = e => {
    setShow(list)
  }

  const { data } = useResultContext()
  console.log(data)
  return (
    <>
      <S.MainSection>
        <h1>이름 : {data.name}</h1>
        <h1>이메일 : {data.email}</h1>
        <img src={data.profileImage} />
        <h1>
          다른 사람들의 <br />
          미로를 체험해봐요.
        </h1>

        {show}
      </S.MainSection>
    </>
  )
}

export default Share
