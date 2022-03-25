import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div>
      <S.MainSection>
        <img className="logo" src={logo} alt="" />
        <hr />
        <h3 className="teamName">빅픽쳐 팀원들</h3>
        <div className="textSection">
          <div className="container">
            <p>양시준</p>
            <span>https://github.com/YangSiJun528</span>
            <p>유시온</p>
            <span>https://github.com/yoosion030</span>
          </div>
          <div className="container">
            <p>이은우</p>
            <span>https://github.com/lew0205</span>
            <p>백승민</p>
            <span>https://github.com/100Seung-Min</span>
          </div>
        </div>
        <h3 className="teamName">문의</h3>
        <div className="container">
          <p>M&M</p>
          <span>https://github.com/Make-Maze</span>
        </div>
      </S.MainSection>
    </div>
  );
};

export default Footer;
