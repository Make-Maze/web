import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./style";
import Footer from "../../Assets/FooterImg.png";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import { api } from "../../Api";
import { useRecoilState } from "recoil";
import { GoogleId, Login } from "../../Atoms/AtomContainer";

const Start = () => {
  const clientId =
    "121704372282-rashscl91o6ulu8grsn2ut8kbdsm2to6.apps.googleusercontent.com";
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(Login);
  const [googleId, setGoogleId] = useRecoilState(GoogleId);
  function onSuccess(res) {
    // 로그인 성공 시 로그인 된 유저 정보를 보여줌
    api
      .post("/login", {
        googleId: res.profileObj.googleId,
        email: res.profileObj.email,
        name: res.profileObj.name,
        img: res.profileObj.imageUrl,
      })
      .then(function (res) {
        setIsLogin(true);

        sessionStorage.setItem("number", res.data.userId);
        sessionStorage.setItem("googleId", res.data.googleId);
        sessionStorage.setItem("user_email", res.data.email);
        sessionStorage.setItem("user_name", res.data.name);
        sessionStorage.setItem("user_img", res.data.img);
        setGoogleId(sessionStorage.getItem("googleId"));
        toast.success("로그인 성공");
        navigate("/Draw");
      })
      .catch(function (err) {
        console.log(err);
        toast.error("로그인 실패");
      });
  }

  useEffect(() => {
    if (sessionStorage.getItem("googleId") === null) {
      // sessionStorage 에 googleId 라는 key 값으로 저장된 값이 없다면
      setIsLogin(false);
    } else {
      // sessionStorage 에 googleId 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
    }
  }, [isLogin, setIsLogin]);

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
