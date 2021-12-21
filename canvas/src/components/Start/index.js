import React, { useDebugValue, useState, useNavigate } from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import Footer from '../../Assets/FooterImg.png'
import GoogleLogin from '../../Assets/GoogleLogin.png'
import GuestLogin from '../../Assets/GuestLogin.png'
import Snowfall from 'react-snowfall'
import axios from 'axios'

import { useResultContext } from '../../Context/Data'
const Start = () => {
  const clientId =
    '121704372282-6l10fcfppqtqgbhr3mk9guacs6r63pcl.apps.googleusercontent.com'
  const { data, setData } = useResultContext()

  const Login = response => {
    axios
      .post('api')
      .then(response => {
        // const { accessToken } = response.data;
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      })
      .catch(err => console.log(err))
  }

  const guestLogin = response => {}
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
          <S.LoginBtn onClick={Login}>Google 로그인</S.LoginBtn>
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
