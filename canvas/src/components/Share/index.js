import React, { useEffect, useState } from 'react'

import { useResultContext } from '../../Context/Data'
import * as S from './style'
import { api } from '../../App'
import { toast } from 'react-toastify'

const Share = () => {
  const { googleId, liked, setLiked } = useResultContext()

  // // 구글 아이디가 gooleId 인 사용자의 Map 조회
  // useEffect(() => {
  //   api
  //     .get(`/map/${googleId}}`)
  //     .then(res => {
  //       setShared(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const [shared, setShared] = useState([]) // 공유하기

  useEffect(() => {
    api.get('/map').then(res => {
      setShared(res.data)
    })
  }, [])

  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    api
      .get(`/like/${googleId}}`)
      .then(res => {
        console.log(liked)
      })
      .catch(err => console.log(err))
  }, [])

  function isMyMapp(curId) {
    return liked
      .filter(item => {
        if (item.mapId === curId) {
          return false
        }
        return true
      })
      .map(v => {
        return v
      }).length
  }

  return (
    <>
      <S.MainSection>
        <h1>
          다른 사람들의 <br />
          <S.Green> 미로</S.Green>를 체험해봐요.
        </h1>
        <hr />
        <S.MapSection>
          {shared.length === 0 ? (
            <p class="noShare">공유된 미로가 없습니다.</p>
          ) : (
            shared.map(element => (
              <>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">[{element.mapName}]</span>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 구글 아이디가 googleId 인 사용자가 다른 사용자가 만든 맵 아이디가 mapId인 맵 저장
                        if (googleId === element.userGoogleId) {
                          toast.error('자신이 만든 맵은 저장할 수 없습니다.')
                        } else if (isMyMapp(element.mapId) !== liked.length) {
                          toast.error('이미 저장한 맵입니다.')
                        } else {
                          api
                            .get(`/like/${googleId}/${element.mapId}`)
                            .then(res => {
                              console.log(element)
                              setLiked(
                                liked.concat({
                                  ...element,
                                  likeId: res.data.likeId,
                                  mapId: res.data.mapId,
                                })
                              )
                            })
                            .catch(err => {
                              console.log(err)
                            })
                        }
                      }}
                    >
                      저장하기
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

export default Share
