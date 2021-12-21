import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

const Header = () => {
  return (
    <S.Header>
      <div>
        <Link to="/">여기에 로고 있으면 좋을듯</Link>
      </div>
      <div>
        <Link to="/Draw">만들기</Link>
        <Link to="/Share">체험하기</Link>
        <Link to="/User">마이페이지</Link>
      </div>
    </S.Header>
  )
}

export default Header
