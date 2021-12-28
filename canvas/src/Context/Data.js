// context.js
import { createContext, useContext, useState } from 'react'

export const ResultContext = createContext(undefined)
// createContext 선언

export function ResultContextProvider({ children }) {
  ////글로벌하게 관리할 states
  const [profile, setProfile] = useState({})
  const [img, setImg] = useState(null)
  const [title, setTitle] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [view, setView] = useState([])
  const [mapData, setMapData] = useState({
    title: '',
    imgURL: '',
    mapId: null,
    block: '',
  })
  const [saved, setSaved] = useState([])
  const [shared, setShared] = useState([])
  const user_id = sessionStorage.getItem('user_id')
  const value = {
    profile,
    setProfile,
    img,
    setImg,
    title,
    setTitle,
    isLogin,
    setIsLogin,
    view,
    setView,
    shared,
    setShared,
    saved,
    setSaved,
    mapData,
    setMapData,
    user_id,
  }

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  )
}

export function useResultContext() {
  return useContext(ResultContext)
} //다른 컴포넌트에서 context를 사용할 때 쓰임.
