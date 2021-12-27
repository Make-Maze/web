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
        <div>
          <h1>자기가 저장한 미로랑 기타 정보</h1>
          {shared.length === 0 ? (
            <p class="noSave">저장된 미로가 없습니다.</p>
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
        </div>
      </S.MainSection>
    </>
  )
}

export default Share
