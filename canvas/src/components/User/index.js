import React, { useState, useEffect } from 'react'
import * as S from './style'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'
import { api } from '../../App'

const User = () => {
  const { googleId, liked, setLiked } = useResultContext()
  const [saved, setSaved] = useState([]) // 저장하기

  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    api
      .get(`/map/${googleId}`)
      .then(res => {
        setSaved(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [])

  // 다른 사람 맵 저장한거 조회
  useEffect(() => {
    api
      .get(`/like/${googleId}`)
      .then(res => {
        setLiked(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <S.MainSection>
        <h1 className="profile">내 정보</h1>
        <hr />
        <S.UserSection>
          <img src={sessionStorage.getItem('user_img')} alt="" />
          <div>
            <p>이름 : {sessionStorage.getItem('user_name')}</p>
            <p>이메일 : {sessionStorage.getItem('user_email')}</p>
          </div>
        </S.UserSection>
        <S.MapSection>
          <h1>
            {sessionStorage.getItem('user_name')} 님이 <S.Green>만든</S.Green>{' '}
            미로
          </h1>
          <hr />
          {saved.length === 0 ? (
            <p class="noSave">만든 미로가 없습니다.</p>
          ) : (
            saved.map(element => (
              <>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 사용자가 직접 만든 미로 지우기
                        api
                          .delete(`/map/${element.mapId}`)
                          .then(res => {
                            setSaved(
                              saved.filter(
                                mapData => mapData.mapId !== element.mapId
                              )
                            )
                            toast.success('삭제 완료')
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
            {sessionStorage.getItem('user_name')} 님이 <S.Green>저장한</S.Green>{' '}
            미로
          </h1>
          <hr />
          {liked.length === 0 ? (
            <p class="noSave">저장한 미로가 없습니다.</p>
          ) : (
            liked.map(element => (
              <>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 저장된 맵 아이디가 likeId인 맵 삭제
                        api
                          .delete(`/like/${element.likeId}`)
                          .then(res => {
                            setLiked(
                              liked.filter(
                                mapData => mapData.mapId !== element.mapId
                              )
                            )
                            toast.success('삭제 완료')
                          })
                          .catch(err => {
                            console.log(err)
                            toast.success('삭제 실패')
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
