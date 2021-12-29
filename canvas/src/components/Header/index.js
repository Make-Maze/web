import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './style'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Header = () => {
  const { isLogin, setIsLogin } = useResultContext()
  const navigate = useNavigate()
  const Logout = () => {
    setIsLogin(false)
    sessionStorage.clear()
    navigate('/')
    toast.info('로그아웃 하였습니다.')
  }

  return (
    <S.Header>
      <div>
        <span>여기에 로고 있으면 좋을듯</span>
      </div>
      <div>
        <Link to="/Draw">만들기</Link>
        <Link to="/Share">체험하기</Link>
        <Link to="/User">마이페이지</Link>
        <span onClick={Logout}>로그아웃</span>
      </div>
    </S.Header>
  )
}

export default Header
