import React, { useDebugValue, useState, useNavigate } from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import Footer from '../../Assets/FooterImg.png'
import GoogleLogin from '../../Assets/GoogleLogin.png'
import GuestLogin from '../../Assets/GuestLogin.png'
import axios from 'axios'

import { useResultContext } from '../../Context/Data'
const Start = () => {
  const { data, setData } = useResultContext()

  const TryLogin = response => {
    // axios({
    //   method: 'get',
    //   url: '/oauth/googleRequest',
    // })
    //   .then(res => {
    //     console.log(res)
    //     setData({
    //       email: res.data.email,
    //       name: res.data.name,
    //       img: res.data.picture,
    //     })
    //     localStorage.setItem('m&m_token', res.data.access_token)
    //   })
    //   .catch(err => console.log(err))

    async function TryLogin(response) {
      try {
        const res = await axios.get('/oauth/googleRequest')
        setData({
          email: res.data.email,
          name: res.data.name,
          img: res.data.picture,
        })
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const guestLogin = response => {}
  // async function Login() {
  //   try {
  //     await
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <S.MainSection>
      <h1>
        나만의 <S.Green>미로</S.Green>를 즐겨보세요 !
      </h1>
      <hr />
      <S.Container>
        <S.LoginSection>
          <S.Text>
            <S.Green>맵 제작</S.Green> 및 <S.Green>플레이</S.Green>을 하고
            싶으시다면
          </S.Text>
          <S.LoginBtn onClick={TryLogin}>Google 로그인</S.LoginBtn>
          <img src={GoogleLogin} />
        </S.LoginSection>
        <S.LoginSection>
          <S.Text>
            <S.Green>기존 미로</S.Green>를 하고 싶으시다면
          </S.Text>
          <S.LoginBtn onClick={guestLogin}>Guest 로그인</S.LoginBtn>
          <img src={GuestLogin} />
        </S.LoginSection>
      </S.Container>
      <Link to="/User">공유 페이지 이동</Link>
      <img src={Footer} style={{ width: '100%' }} />
    </S.MainSection>
  )
}

export default Start
