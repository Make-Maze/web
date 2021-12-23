import React from 'react'
import { Link } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import { useResultContext } from '../../Context/Data'
import * as S from './style'
const NotFound = () => {
  const { isLogin } = useResultContext()
  return (
    <S.MainSection>
      <Snowfall />
      <h1>Not Found</h1>
      찾을 수 없는 페이지 입니다.
      {isLogin ? (
        <Link to="/Draw">홈으로 이동</Link>
      ) : (
        <Link to="/">홈으로 이동</Link>
      )}
    </S.MainSection>
  )
}

export default NotFound
