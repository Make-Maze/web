import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";
import { toast } from "react-toastify";
import logo from "../../Assets/logo.png";
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
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#9ecc93" : "black" })}
          to="/Draw"
        >
          만들기
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#9ecc93" : "black" })}
          to="/Share"
        >
          체험하기
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#9ecc93" : "black" })}
          to="/User"
        >
          마이페이지
        </NavLink>
        <span onClick={Logout}>로그아웃</span>
      </div>
    </S.Header>
  );
};

export default Header;
