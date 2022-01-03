import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <div>
      <S.MainSection>
        <img className="logo" src={logo} alt="" />
        <hr />
        <h3 class="teamName">빅픽쳐 팀원들</h3>
        <div className="textSection">
          <div className="container">
            <p>양시준</p>
            <Link to="https://github.com/YangSiJun528">
              https://github.com/YangSiJun528
            </Link>
            <p>유시온</p>
            <Link to="https://github.com/yoosion030">
              https://github.com/yoosion030
            </Link>
          </div>
          <div className="container">
            <p>이은우</p>
            <Link to="https://github.com/lew0205">
              https://github.com/YangSiJun528
            </Link>
            <p>백승민</p>
            <Link to="https://github.com/100Seung-Min">
              https://github.com/100Seung-Min
            </Link>
          </div>
        </div>
        <h3 class="teamName">문의</h3>
        <div className="container">
          <p>M&M</p>
          <Link to="https://github.com/Make-Maze">
            https://github.com/Make-Maze
          </Link>
        </div>
      </S.MainSection>
    </div>
  )
}

export default Footer
