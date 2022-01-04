// context.js
import { createContext, useContext, useState } from 'react'

export const ResultContext = createContext(undefined)
// createContext 선언

export function ResultContextProvider({ children }) {
  ////글로벌하게 관리할 states

  const [title, setTitle] = useState('') // 맵 제목
  const [isLogin, setIsLogin] = useState(false) // 로그인 확인
  const [liked, setLiked] = useState([]) // 공유하기

  const [googleId, setId] = useState(sessionStorage.getItem('googleId')) // googleId 여부
  const value = {
    title,
    setTitle,
    isLogin,
    setIsLogin,
    googleId,
    setId,
    liked,
    setLiked,
  }

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  )
}

export function useResultContext() {
  return useContext(ResultContext)
} //다른 컴포넌트에서 context를 사용할 때 쓰임.
