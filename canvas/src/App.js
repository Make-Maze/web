import "./App.css";
import * as P from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { Login } from "./Atoms/AtomContainer";

export const api = axios.create({
  baseURL: "http://192.168.0.32:8888",
});

const App = () => {
  const [isLogin, setIsLogin] = useRecoilState(Login);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<P.StartPage></P.StartPage>} />
            <Route path="/draw" element={<P.DrawPage></P.DrawPage>} />
            <Route path="/user" element={<P.UserPage></P.UserPage>} />
            <Route path="/share" element={<P.SharePage></P.SharePage>} />
            <Route path="/*" element={<P.NotFoundPage></P.NotFoundPage>} />
          </>
        ) : (
          <>
            <Route path="/" element={<P.StartPage></P.StartPage>} />
            <Route path="/*" element={<P.NotFoundPage></P.NotFoundPage>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
