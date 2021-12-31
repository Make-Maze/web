import React, { useEffect } from 'react'

import { useResultContext } from '../../Context/Data'
import * as S from './style'
import axios from 'axios'

const Share = () => {
  const { shared, setShared, googleId, setMapData, mapData, saved, setSaved } =
    useResultContext()

  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    axios
      .get(`http://192.168.137.6:8888/map/${googleId}}`)
      .then(res => {
        // setShared(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [setShared, shared])

  // useEffect(() => {
  //   axios
  //     .get(`http://192.168.137.6:8888/like/${googleId}}`)
  //     .then(res => {
  //       setShared(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [setShared, shared])
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
                  <img src={element.image} alt="" />
                  <p>
                    {element.name}님이 제작한 [{element.mapName}]
                  </p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        axios
                          .get(
                            `http://192.168.137.6:8888/like/${googleId}/${element.mapId}`
                          )
                          .then(res => {
                            setMapData({
                              ...mapData,
                              likeId: res.data.likeId,
                              mapId: res.data.mapId,
                            })
                            setSaved(saved.concat({ ...mapData }))
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
