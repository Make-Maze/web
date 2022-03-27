import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Login } from "../../Atoms/";
import Button from "../Button";

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
        <Link to="/draw">
          <S.Logo>Make & Maze</S.Logo>
        </Link>
        <S.Wrapper>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#1a6dff" : "black",
            })}
            to="/draw"
          >
            만들기
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#1a6dff" : "black",
            })}
            to="/share"
          >
            체험하기
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#1a6dff" : "black",
            })}
            to="/user"
          >
            마이페이지
          </NavLink>
          <Button content="로그아웃" onClick={Logout} />
        </S.Wrapper>
      </S.Container>
    </S.Header>
  );
};

export default Header;
