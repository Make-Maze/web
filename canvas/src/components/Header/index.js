import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./style";
import { toast } from "react-toastify";
import logo from "../../Assets/logo.png";
import { useRecoilState } from "recoil";
import { Login } from "../../Atoms/AtomContainer";

const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(Login);
  const navigate = useNavigate();
  const Logout = () => {
    setIsLogin(false);
    sessionStorage.clear();
    navigate("/");
    toast.info("로그아웃 하였습니다.");
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
