import React from 'react'
import Header from '../Header'
import { useResultContext } from '../../Context/Data'
import * as S from './style'

const Share = () => {
  const { img, title } = useResultContext()
  return (
    <>
      <Header></Header>
      <S.MainSection>
        <h1>
          다른 사람들의 <br />
          <S.Green> 미로</S.Green>를 체험해봐요.
        </h1>
        <hr />
        <S.ItemSection>
          <p>{title}</p>
          <img src={img} alt="" />
          <S.ButtonWrapper>
            <button>시작하기</button>
            <button>저장하기</button>
          </S.ButtonWrapper>
        </S.ItemSection>
      </S.MainSection>
    </>
  )
}

export default Share
