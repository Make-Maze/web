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
  const [mapData, setMapData] = useState({
    mapId: null, // 맵 고유 번호
    mapName: '', // 맵 제목
    image: '', // 맵 이미지 주소
    block: '', // 맵 코드 ( json )
    content: '',
    mapCode: '',
  }) // 맵 정보

  const [saved, setSaved] = useState([]) // 저장하기
  const [shared, setShared] = useState([]) // 공유하기
  const [user_id, setId] = useState(sessionStorage.getItem('user_id')) // user_id 여부
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
    user_id,
    setId,
  }

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  )
}

export function useResultContext() {
  return useContext(ResultContext)
} //다른 컴포넌트에서 context를 사용할 때 쓰임.
