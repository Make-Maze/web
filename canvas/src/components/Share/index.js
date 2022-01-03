import React, { useEffect, useState } from 'react'

import { useResultContext } from '../../Context/Data'
import * as S from './style'
import axios from 'axios'
import { api } from '../../App'

const Share = () => {
  const {
    shared,
    setShared,
    googleId,
    setMapData,
    mapData,
    saved,
    setSaved,
    liked,
    setLiked,
  } = useResultContext()

  // // 구글 아이디가 gooleId 인 사용자의 Map 조회
  // useEffect(() => {
  //   api
  //     .get(`/map/${googleId}}`)
  //     .then(res => {
  //       setShared(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [shared])

  const [allMap, setAllMap] = useState([])
  useEffect(() => {
    api.get('/map').then(res => {
      setAllMap(res.data)
    })
  }, [])

  // // 구글 아이디가 gooleId 인 사용자의 Map 조회
  // useEffect(() => {
  //   api
  //     .get(`/like/${googleId}}`)
  //     .then(res => {
  //       setLiked(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [liked])

  return (
    <>
      <S.MainSection>
        <h1>
          다른 사람들의 <br />
          <S.Green> 미로</S.Green>를 체험해봐요.
        </h1>
        <hr />
        <S.MapSection>
          {allMap.length === 0 ? (
            <p class="noShare">공유된 미로가 없습니다.</p>
          ) : (
            allMap.map(element => (
              <>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>
                    {element.userName}님이 제작한 [{element.mapName}]
                  </p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 구글 아이디가 googleId 인 사용자가 다른 사용자가 만든 맵 아이디가 mapId인 맵 저장
                        api
                          .get(`/like/${googleId}/${element.mapId}`)
                          .then(res => {
                            console.log(element)
                            console.log(mapData)
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
