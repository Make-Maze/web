import './App.css'
import * as P from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useResultContext } from './Context/Data'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.137.21:8888',
})

const App = () => {
  const { isLogin } = useResultContext()
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<P.StartPage></P.StartPage>}></Route>
              <Route path="/Draw" element={<P.DrawPage></P.DrawPage>}></Route>
              <Route path="/User" element={<P.UserPage></P.UserPage>}></Route>
              <Route
                path="/Share"
                element={<P.SharePage></P.SharePage>}
              ></Route>
              <Route
                path="/*"
                element={<P.NotFoundPage></P.NotFoundPage>}
              ></Route>
            </>
          ) : (
            <>
              <Route path="/" element={<P.StartPage></P.StartPage>}></Route>
              <Route
                path="/*"
                element={<P.NotFoundPage></P.NotFoundPage>}
              ></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
