import "./App.css";
import * as P from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Login, Profile } from "./Atoms/";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import member from "./Api/member";

const App = () => {
  const [isLogin, setIsLogin] = useRecoilState(Login);
  const [cookie, ,] = useCookies();
  const [, setProfile] = useRecoilState(Profile);
  useEffect(() => {
    if (cookie.accessToken) {
      setIsLogin(true);

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${cookie.accessToken}`;

      member.me().then((res) => {
        setProfile({
          googleId: res.data.password,
          name: res.data.name,
          email: res.data.email,
          imageUrl: res.data.img,
        });
      });
    }
  }, [cookie.accessToken, isLogin, setIsLogin, setProfile]);

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
