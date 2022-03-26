import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./style";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import axios from "axios";
import { useRecoilState } from "recoil";
import { Login, Profile } from "../../Atoms";
import maze from "../../Assets/maze.png";

const Start = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useRecoilState(Profile);
  const [isLogin, setIsLogin] = useRecoilState(Login);
  function onSuccess(res) {
    console.log(res);
    // 로그인 성공 시 로그인 된 유저 정보를 보여줌
    const { email, googleId, name, imageUrl } = res.profileObj;
    // 유저 정보를 요청하는 api 필요 / 새로고침 시 유저정보가 없어지기 때문
    setProfile({
      email,
      googleId,
      name,
      imageUrl,
    });
    console.log(googleId);
    console.log(profile.googleId);
    axios({
      url: "/auth/login",
      method: "POST",
      data: {
        email: email,
        password: googleId,
        name: name,
        img: imageUrl,
      },
    })
      .then((res) => {
        const { accessToken, refreshToken } = res.data.tokenDto;
        console.log(res);
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setIsLogin(true);
        toast.success("로그인 성공");
        navigate("/draw");
        console.log(profile);
      })
      .catch((err) => {
        console.log(err);
        setIsLogin(false);
        toast.error("다시 시도해 주세요");
      });
  }
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <S.MainSection>
      <S.Logo>Make & Maze</S.Logo>
      <S.Title>
        나만의 미로 게임 <br />
      </S.Title>
      <S.Desc>
        세상에서 단 하나뿐인 나만의 미로를 만들고 직접 플레이 해보세요. <br />
        공유도 할 수 있고 다른 사람의 미로도 플레이 할 수 있어요!
      </S.Desc>
      {isLogin ? (
        <Link to="/Draw">플레이하기</Link>
      ) : (
        <GoogleLogin
          buttonText="로그인 하기"
          accessType="offline"
          responseType="permission"
          approvalPrompt="force"
          prompt="consent"
          clientId={process.env.REACT_APP_CLIENTID}
          onSuccess={onSuccess}
          render={(renderProps) => (
            <S.Container onClick={renderProps.onClick}>로그인 하기</S.Container>
          )}
        />
      )}
      <img src={maze} alt="" />
      <S.Team>Team BigPicture</S.Team>
    </S.MainSection>
  );
};

export default Start;
