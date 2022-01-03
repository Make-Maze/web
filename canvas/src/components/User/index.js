import React, { useState, useEffect } from 'react'
import * as S from './style'
import axios from 'axios'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'

const User = () => {
  const {
    profile,
    title,
    saved,
    setSaved,
    googleId,
    mapData,
    setMapData,
    liked,
    setLiked,
  } = useResultContext()

  // 구글 아이디가 googleId 인 사용자가 저장한 맵 조회
  useEffect(() => {
    console.log(saved)
    axios
      .get(`http://192.168.137.150:8888/like/${googleId}}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [saved])

  // 모든 맵 조회
  useEffect(() => {
    axios
      .get(`http://192.168.137.150:8888/map`)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [mapData])

  return (
    <>
      <S.MainSection>
        <S.UserSection>
          <img src={sessionStorage.getItem('user_img')} alt="" />
          <div>
            <p>이름 : {sessionStorage.getItem('user_name')}</p>
            <p>이메일 : {sessionStorage.getItem('user_email')}</p>
          </div>
        </S.UserSection>
        <hr />
        <S.MapSection>
          <h1>
            {sessionStorage.getItem('user_name')} 님이 만든{' '}
            <S.Green>미로</S.Green>
          </h1>
          {/* 저장한 미로가 없을 시 : 저장한 미로가 있으면 화면에 띄우기 */}
          {saved.length === 0 ? (
            <p class="noSave">만든 미로가 없습니다.</p>
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
                        // 사용자가 직접 만든 미로 지우기
                        axios
                          .delete(
                            `http://192.168.137.150:8888/map/${element.mapId}`
                          )
                          .then(res => {
                            toast.success('삭제 완료')
                            setSaved(
                              saved.filter(
                                mapData => mapData.mapId !== element.mapId
                              )
                            )
                            console.log(res)
                          })
                          .catch(err => {
                            console.log(err)
                            toast.error('삭제 실패')
                          })
                      }}
                    >
                      삭제하기
                    </button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </>
            ))
          )}
          <h1>
            {sessionStorage.getItem('user_name')} 님이 저장한{' '}
            <S.Green>미로</S.Green>
          </h1>
          {liked.length === 0 ? (
            <p class="noSave">저장한 미로가 없습니다.</p>
          ) : (
            liked.map(element => (
              <>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>
                    {element.userName}님이 제작한 [{element.mapName}]
                  </p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 저장된 맵 아이디가 likeId인 맵 삭제
                        axios
                          .delete(
                            `http://192.168.137.150:8888/like/${element.likeId}`
                          )
                          .then(res => {
                            setLiked(
                              liked.filter(
                                mapData => mapData.mapId !== element.mapId
                              )
                            )
                            console.log(res)
                          })
                      }}
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
