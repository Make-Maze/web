import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/Draw">만들기</Link>
      <Link to="/Share">체험하기</Link>
      <Link to="/User">마이페이지</Link>
    </div>
  )
}

export default Header
