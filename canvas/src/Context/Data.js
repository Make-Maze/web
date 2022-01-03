// context.js
import { createContext, useContext, useState } from 'react'

export const ResultContext = createContext(undefined)
// createContext 선언

export function ResultContextProvider({ children }) {
  ////글로벌하게 관리할 states
  const [profile, setProfile] = useState({
    id: '',
    email: '',
    name: '',
    image: '',
  }) // 프로필
  const [title, setTitle] = useState('') // 맵 제목
  const [isLogin, setIsLogin] = useState(false) // 로그인 확인
  const [mapData, setMapData] = useState({}) // 맵 정보

  const [saved, setSaved] = useState([]) // 저장하기
  const [shared, setShared] = useState([]) // 공유하기
  const [liked, setLiked] = useState([]) // 공유하기

  const [googleId, setId] = useState(sessionStorage.getItem('googleId')) // googleId 여부
  const value = {
    profile,
    setProfile,
    title,
    setTitle,
    isLogin,
    setIsLogin,
    shared,
    setShared,
    saved,
    setSaved,
    mapData,
    setMapData,
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
