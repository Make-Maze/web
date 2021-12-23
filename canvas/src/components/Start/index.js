import React, { useDebugValue, useState, useNavigate } from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import Footer from '../../Assets/FooterImg.png'
import GoogleLoginImg from '../../Assets/GoogleLogin.png'
import GuestLogin from '../../Assets/GuestLogin.png'
import axios from 'axios'
import GoogleLogin from 'react-google-login'

import { useResultContext } from '../../Context/Data'
const Start = () => {
  const { data, setData } = useResultContext()
  const clientId =
    '121704372282-6l10fcfppqtqgbhr3mk9guacs6r63pcl.apps.googleusercontent.com'
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

  const onSuccess = response => {
    const userData = {
      profileImage: response.profileObj.imageUrl,
      email: response.profileObj.email,
      name: response.profileObj.name,
      // accessToken = response
    }
    console.log(userData)
  }
  const onFailure = error => {
    console.log(error)
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
          <GoogleLogin
            buttonText="구글 로그인"
            accessType="offline"
            responseType="permission"
            approvalPrompt="force"
            prompt="consent"
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
          ></GoogleLogin>{' '}
          <img src={GoogleLoginImg} />
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
      <img src={Footer} className="footerImg" />
    </S.MainSection>
  )
}

export default Start
