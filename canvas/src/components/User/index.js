import React, { useState } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import UserBackground from '../../Assets/UserBackground.png'

const User = () => {
  const { profile, title, img, saved, setSaved } = useResultContext()
  console.log(img)
  return (
    <>
      <S.MainSection>
        <S.UserSection>
          <img src={profile.imageUrl} alt="" />
          <div>
            <p>이름 : {profile.name}</p>
            <p>이메일 : {profile.email}</p>
          </div>
        </S.UserSection>
        <hr />
        <S.MapSection>
          <h1>자기가 저장한 미로랑 기타 정보</h1>
          {saved.length === 0 ? (
            <p class="noSave">저장된 미로가 없습니다.</p>
          ) : (
            saved.map(element => (
              <>
                <S.ItemSection>
                  <p>{element.title}</p>
                  <img src={element.imgURL} alt="" />
                  <S.ButtonWrapper>
                    <button>시작하기</button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </>
            ))
          )}
        </S.MapSection>
      </S.MainSection>
    </>
  )
}

export default User
