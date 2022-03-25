import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./style";
import Footer from "../../Assets/FooterImg.png";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import axios from "axios";
import { useRecoilState } from "recoil";
import { GoogleId, Login, Name, Email, Img, Profile } from "../../Atoms";

const Start = () => {
  const clientId =
    "121704372282-rashscl91o6ulu8grsn2ut8kbdsm2to6.apps.googleusercontent.com";
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(Login);
  // const [googleId, setGoogleId] = useRecoilState(GoogleId);
  // const [name, setName] = useRecoilState(Name);
  // const [email, setEmail] = useRecoilState(Email);
  // const [img, setImg] = useRecoilState(Img);
  const [profile, setProfile] = useRecoilState(Profile);
  function onSuccess(res) {
    console.log(res);
    // 로그인 성공 시 로그인 된 유저 정보를 보여줌
    const { email, googleId, name, imageUrl } = res.profileObj;

    axios({
      url: "/auth/login",
      method: "post",
      data: {
        email: email,
        password: googleId,
        name: name,
        img: imageUrl,
      },
    })
      .then((res) => {
        const { accessToken } = res.data.tokenDto;
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        // setGoogleId(res.data.password);
        // setEmail(res.data.email);
        // setImg(res.data.img);
        // setName(res.data.name);
        setIsLogin(true);

        setProfile({
          googleId: res.data.password,
          name: res.data.name,
          email: res.data.email,
          img: res.data.img,
        });
        toast.success("로그인 성공");
        navigate("/draw");
      })
      .catch((err) => {
        console.log(err);
        setIsLogin(false);
        toast.error("다시 시도해 주세요");
      });
  }

  return (
    <div>
      <S.MainSection>
        <h1>
          나만의 미로를 즐기는 게임 <br />
          <S.Green>M & M</S.Green>
        </h1>
        <hr />
        {isLogin ? (
          <S.PlayBtn>
            <Link to="/Draw">플레이하기</Link>
          </S.PlayBtn>
        ) : (
          <>
            <S.Container>
              <S.Text>게임을 플레이 하시고 싶으시다면</S.Text>
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
            </S.Container>
          </>
        )}
        <img src={Footer} className="footerImg" alt="" />
      </S.MainSection>
    </div>
  );
};

export default Start;
