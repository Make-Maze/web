import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import * as S from './style'
import Snowfall from 'react-snowfall'
import axios from 'axios'

import { useResultContext } from '../../Context/Data'
const Start = () => {
  const clientId =
    '121704372282-6l10fcfppqtqgbhr3mk9guacs6r63pcl.apps.googleusercontent.com'

  // const [data, setData] = useState({})
  const { data, setData } = useResultContext()

  const onSuccess = response => {
    const userData = {
      profileImage: response.profileObj.imageUrl,
      email: response.profileObj.email,
      name: response.profileObj.name,
    }
    setData(userData)
    // console.log(data)
    // console.log(userData)

    // console.log(userData)
    // axios
    //   .post('api', userData)
    //   .then(response => {
    //     // const { accessToken } = response.data;
    //     // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    //     // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    //   })
    //   .catch(err => console.log(err))
  }

  const onFailure = error => {
    console.log(error)
  }

  return (
    <S.MainSection>
      <h1>나만의 미로를 즐겨보세요 !</h1>
      <Snowfall snowflakeCount={100} />
      <S.Container>
        <S.LoginSection>
          <S.Text>맵 제작 및 체험을 하고 싶으시다면</S.Text>
          <GoogleLogin
            buttonText="구글 로그인"
            accessType="offline"
            responseType="permission"
            approvalPrompt="force"
            prompt="consent"
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
          ></GoogleLogin>
        </S.LoginSection>
        <S.LoginSection>
          <S.Text>기존 미로를 하고 싶으시다면</S.Text>
          <S.LoginBtn>게스트 로그인</S.LoginBtn>
        </S.LoginSection>
      </S.Container>
      <Link to="/share">공유 페이지 이동</Link>
    </S.MainSection>
  )
}

export default Start
