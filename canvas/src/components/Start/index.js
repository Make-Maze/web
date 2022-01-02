import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as S from './style'
import Footer from '../../Assets/FooterImg.png'
import GoogleLoginImg from '../../Assets/GoogleLogin.png'
import GuestLogin from '../../Assets/GuestLogin.png'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import { useResultContext } from '../../Context/Data'
import { toast } from 'react-toastify'

const Start = () => {
  const { isLogin, setIsLogin, setProfile, setId, profile } = useResultContext()
  const clientId =
    '121704372282-rashscl91o6ulu8grsn2ut8kbdsm2to6.apps.googleusercontent.com'
  const navigate = useNavigate()

  function onSuccess(res) {
    // const userData = {
    //   email: res.profileObj.email,
    //   name: res.profileObj.name,
    //   imageUrl: res.profileObj.imageUrl,
    //   googleId: res.profileObj.googleId,
    // }

    // 로그인 시도 시 실행
    axios
      .post('http://192.168.137.163:8888/login', {
        googleId: res.profileObj.googleId,
        email: res.profileObj.email,
        name: res.profileObj.name,
        img: res.profileObj.imageUrl,
      })
      .then(function (res) {
        setIsLogin(true)

        sessionStorage.setItem('number', res.data.userId)
        sessionStorage.setItem('googleId', res.data.googleId)
        sessionStorage.setItem('user_email', res.data.email)
        sessionStorage.setItem('user_name', res.data.name)
        sessionStorage.setItem('user_image', res.data.img)

        setId(sessionStorage.getItem('googleId'))

        toast.success('로그인 성공')
        navigate('/Draw')
      })
      .catch(function (err) {
        console.log(err)
        toast.error('로그인 실패')
      })
  }

  const guestLogin = response => {}

  useEffect(() => {
    if (sessionStorage.getItem('googleId') === null) {
      // sessionStorage 에 googleId 라는 key 값으로 저장된 값이 없다면
      setIsLogin(false)
    } else {
      // sessionStorage 에 googleId 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true)
    }

    console.log(isLogin)
  }, [isLogin, setIsLogin])

  return (
    <div>
      <S.MainSection>
        <h1>
          나만의 <S.Green>미로</S.Green>를 즐겨보세요 !
        </h1>
        <hr />
        {isLogin ? (
          <S.PlayBtn>
            <Link to="/Draw">플레이하기</Link>
          </S.PlayBtn>
        ) : (
          <>
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
                  className="googleLogin"
                ></GoogleLogin>
                <img src={GoogleLoginImg} alt="" />
              </S.LoginSection>
              <S.LoginSection>
                <S.Text>
                  <S.Green>기존 미로</S.Green>를 하고 싶으시다면
                </S.Text>
                <S.LoginBtn onClick={guestLogin}>Guest 로그인</S.LoginBtn>
                <img src={GuestLogin} alt="" />
              </S.LoginSection>
            </S.Container>
          </>
        )}
        <img src={Footer} className="footerImg" alt="" />
      </S.MainSection>
    </div>
  )
}

export default Start
