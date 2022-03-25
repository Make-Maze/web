import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import { useRecoilState } from "recoil";
import { Login } from "../../Atoms/";
import * as S from "./style";

const NotFound = () => {
  const [isLogin, setIsLogin] = useRecoilState(Login);

  useEffect(() => {
    if (sessionStorage.getItem("googleId") === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
    console.log(isLogin);
  }, [isLogin, setIsLogin]);

  return (
    <S.MainSection>
      <Snowfall />
      <h1>Not Found</h1>
      찾을 수 없는 페이지 입니다.
      {isLogin ? (
        <Link to="/Draw">홈으로 이동</Link>
      ) : (
        <Link to="/">홈으로 이동</Link>
      )}
    </S.MainSection>
  );
};

export default NotFound;
