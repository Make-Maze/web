import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Login } from "../../Atoms/";

const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(Login);
  const navigate = useNavigate();
  const Logout = () => {
    setIsLogin(false);
    localStorage.clear();
    toast.info("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <S.Header>
      <S.Container>
        <div>
          <S.Logo>Make & Maze</S.Logo>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#1a6dff" : "black",
            })}
            to="/Draw"
          >
            만들기
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#1a6dff" : "black",
            })}
            to="/Share"
          >
            체험하기
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#1a6dff" : "black",
            })}
            to="/User"
          >
            마이페이지
          </NavLink>
          <S.LogOutBtn onClick={Logout}>로그아웃</S.LogOutBtn>
        </div>
      </S.Container>
    </S.Header>
  );
};

export default Header;
