import React from 'react'
import * as S from './style'
import GoogleLogin from 'react-google-login'

const Login = () => {
  const clientId =
    '121704372282-6l10fcfppqtqgbhr3mk9guacs6r63pcl.apps.googleusercontent.com'

  const onSuccess = async response => {
    const {
      googleId,
      profileObj: { email, name },
    } = response
    console.log(response)

    // await onGoogleLogin()
  }

  const onFailure = error => {
    console.log(error)
  }
  return (
    <S.MainSection>
      <S.LoginBtn>
        <GoogleLogin
          clientId={clientId}
          responseType="id_token"
          onSuccess={onSuccess}
          onFailure={onFailure}
        ></GoogleLogin>
      </S.LoginBtn>
    </S.MainSection>
  )
}

export default Login
