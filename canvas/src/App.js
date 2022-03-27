import "./App.css";
import * as P from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Login } from "./Atoms/";
import { useEffect } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useRecoilState(Login);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(true);
    }
  }, [isLogin, setIsLogin]);

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
