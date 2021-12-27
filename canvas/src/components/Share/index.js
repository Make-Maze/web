import React from 'react'

import { useResultContext } from '../../Context/Data'
import * as S from './style'

const Share = () => {
  const { img, title, shared, setShared } = useResultContext()
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
                  <p>{element.title}</p>
                  <img src={element.imgURL} alt="" />
                  <S.ButtonWrapper>
                    <button>시작하기</button>
                    <button>공유하기</button>
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
