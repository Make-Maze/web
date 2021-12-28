import React, { useState, useEffect } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import UserBackground from '../../Assets/UserBackground.png'
import { toast } from 'react-toastify'

const User = () => {
  const { profile, title, img, saved, setSaved, user_id } = useResultContext()

  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    axios
      .get(`http://192.168.137.205:8888/map/${user_id}}`, [
        {
          mapId: '',
          img: '',
          content: '',
        },
      ])
      .then(res => {
        console.log(res)
        setSaved(res.data)
      })
      .catch(err => console.log(err))
  }, [setSaved, saved])

  // 맵 삭제
  const del = () => {
    axios
      .delete(`http://192.168.137.205:8888/map/${user_id}`) // 나중엔 map id 로 바꿔야함
      .then(res => {
        console.log(res)
        toast.success('삭제 성공')
      })
      .catch(err => {
        console.log(err)
        toast.err('삭제 실패')
      })
  }
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
          <h1>
            저장한 <S.Green>미로</S.Green>랑 <S.Green>기타 정보</S.Green>
          </h1>
          {/* 저장한 미로가 없을 시 : 저장한 미로가 있으면 화면에 띄우기 */}
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
                    <button onClick={del}>삭제하기</button>
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
