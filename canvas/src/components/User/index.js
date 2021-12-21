import React, { useEffect, useState } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import Header from '../Header'

const Share = () => {
  const [list, setList] = useState('')
  const [show, setShow] = useState()

  const { data } = useResultContext()
  console.log(data)
  return (
    <>
      <Header></Header>
      <S.MainSection>
        <S.UserSection>
          <img src={data.profileImage} />
          <div>
            <p>이름 : {data.name}</p>
            <p>이메일 : {data.email}</p>
          </div>
        </S.UserSection>
      </S.MainSection>
    </>
  )
}

export default Share
