import React from 'react'
import * as S from './style'
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <div>
      <S.MainSection>
        <img className="logo" src={logo} alt="" />
        <hr />
        <S.TextSection>
          <p>양시준</p>
          <a>https://github.com/YangSiJun528</a>
          <p>유시온</p>
          <p>이은우</p>
          <p>백승민</p>
        </S.TextSection>
      </S.MainSection>
    </div>
  )
}

export default Footer
