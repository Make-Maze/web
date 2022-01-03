import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as S from './style'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../Assets/logo.png'

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
        <img className="logo" src={logo} alt="" />
      </div>
      <div>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? '#9ecc93' : 'black' })}
          to="/Draw"
        >
          만들기
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? '#9ecc93' : 'black' })}
          to="/Share"
        >
          체험하기
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? '#9ecc93' : 'black' })}
          to="/User"
        >
          마이페이지
        </NavLink>
        <span onClick={Logout}>로그아웃</span>
      </div>
    </S.Header>
  )
}

export default Header
