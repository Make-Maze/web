import React, { useState, useEffect } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'

const User = () => {
  const { profile, title, saved, setSaved, googleId, setMapData } =
    useResultContext()

  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    console.log(saved)

    axios
      .get(`http://192.168.137.163:8888/like/${googleId}}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [saved])

  // 맵 삭제
  const del = () => {
    // axios
    //   .delete(`http://192.168.137.163.137.205:8888/map/${googleId}`) // 나중엔 map id 로 바꿔야함
    //   .then(res => {
    //     console.log(res)
    //     toast.success('삭제 성공')
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     toast.err('삭제 실패')
    //   })
  }

  return (
    <>
      <S.MainSection>
        <S.UserSection>
          <img src={sessionStorage.getItem('user_image')} alt="" />
          <div>
            <p>이름 : {sessionStorage.getItem('user_name')}</p>
            <p>이메일 : {sessionStorage.getItem('user_email')}</p>
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
                  <img src={element.img} alt="" />
                  <p>
                    {element.userName}님이 제작한 [{element.mapName}]
                  </p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        console.log(element)
                        setSaved(
                          saved.filter(
                            mapData => mapData.mapId !== element.mapId
                          )
                        )
                      }}
                      //   axios
                      //     .delete(
                      //       `http://192.168.137.163:8888/map/${element.mapId}`
                      //     )
                      //     .then(res => {

                      //       )
                      //     })
                      //     .catch(err => {
                      //       console.log(err)
                      //     })
                      // }}
                    >
                      삭제하기
                    </button>
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
