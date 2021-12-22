import React, { useState } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import Header from '../Header'
import mainImg from '../../Assets/UserMainImg.png'

const User = () => {
  const { data, title, img } = useResultContext()
  console.log(data)
  return (
    <>
      <Header></Header>
      <S.MainSection>
        <S.UserSection>
          <img src={data.profileImage} alt="" />
          <div>
            <p>이름 : {data.name}</p>
            <p>이메일 : {data.email}</p>
          </div>
          {/* <img src={mainImg} alt="" className="mainImg" /> */}
        </S.UserSection>
        <hr />
        <S.MapSection>
          <h1>자기가 저장한 미로랑 기타 정보</h1>
          {title}
          <S.ItemSection>
            <p>{title}</p>
            <img src={img} alt="" />
            <S.ButtonWrapper>
              <button>시작하기</button>
            </S.ButtonWrapper>
          </S.ItemSection>
        </S.MapSection>
      </S.MainSection>
    </>
  )
}

export default User
