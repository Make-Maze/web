import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './style'
import Footer from '../../Assets/FooterImg.png'
import GoogleLoginImg from '../../Assets/GoogleLogin.png'
import GuestLogin from '../../Assets/GuestLogin.png'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import Draw from '../Draw'
import { useResultContext } from '../../Context/Data'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Start = () => {
  const { isLogin, setIsLogin, data, setData } = useResultContext()
  const clientId =
    '121704372282-6l10fcfppqtqgbhr3mk9guacs6r63pcl.apps.googleusercontent.com'
  const navigate = useNavigate()

  function onSuccess(res) {
    const userData = {
      email: res.profileObj.email,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
      googleId: res.profileObj.googleId,
    }
    // console.log(res)
    // axios
    //   .post('/login', {
    //     email: res.profileObj.email,
    //     name: res.profileObj.name,
    //     imageUrl: res.profileObj.imageUrl,
    //     googleId: res.profileObj.googleId,
    //   })
    //   .then(sessionStorage.setItem('user_id', res.profileObj.googleId))
    //   .catch(function (err) {
    //     console.log(err)
    //     toast.error('로그인 실패')
    //     onFailure()
    //   })
    setData(userData)
    sessionStorage.setItem('user_id', res.profileObj.googleId)
    navigate('/Draw')
  }
  const onFailure = error => {
    console.log(error)
  }

  const guestLogin = response => {}

  useEffect(() => {
    if (sessionStorage.getItem('user_id') === null) {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      navigate('/')
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true)
    }
  }, [isLogin, setIsLogin])

  return (
    <div>
      {isLogin ? (
        <Draw></Draw>
      ) : (
        <S.MainSection>
          <ToastContainer />
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
          <Link to="/User">공유 페이지 이동</Link>
          <img src={Footer} className="footerImg" alt="" />
        </S.MainSection>
      )}
    </div>
  )
}

export default Start
