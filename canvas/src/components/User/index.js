import React, { useState } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import UserBackground from '../../Assets/UserBackground.png'

const User = () => {
  const { data, title, img, view, setView } = useResultContext()
  console.log(img)
  return (
    <>
      <S.MainSection>
        <S.UserSection>
          <img src={data.imageUrl} alt="" />
          <div>
            <p>이름 : {data.name}</p>
            <p>이메일 : {data.email}</p>
          </div>
        </S.UserSection>
        <hr />
        <S.MapSection>
          <h1>자기가 저장한 미로랑 기타 정보</h1>
          {view.map(element => (
            <>
              <S.ItemSection>
                <p>{element.title}</p>
                <img src={element.imgURL} alt="" />
                <S.ButtonWrapper>
                  <button>시작하기</button>
                </S.ButtonWrapper>
              </S.ItemSection>
            </>
          ))}
        </S.MapSection>
      </S.MainSection>
    </>
  )
}

export default User
