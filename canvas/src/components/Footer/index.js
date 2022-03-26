import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import github from "../../Assets/github.png";
const Footer = () => {
  return (
    <S.Footer>
      <hr />
      <S.Container>
        <div>
          <S.TeamName>
            <span>Team BigPicture</span>을 소개합니다.
          </S.TeamName>
          <S.TextSection>
            <S.Text>
              <span class="subject">BackEnd</span> 양시준
            </S.Text>
            <S.Text>
              <span class="subject">FrontEnd</span> 백승민, 유시온
            </S.Text>
            <S.Text>
              <span class="subject">Game</span> 이은우
            </S.Text>
          </S.TextSection>
        </div>
        <a href="https://github.com/Make-Maze">
          <img src={github} alt="" />
        </a>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
