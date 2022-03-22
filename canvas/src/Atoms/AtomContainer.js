import { atom } from "recoil";

export const Title = atom({
  key: "Title",
  default: "",
});

export const Login = atom({
  key: "Login",
  default: false,
});

export const Liked = atom({
  key: "Liked",
  default: [],
});

export const GoogleId = atom({
  key: "GoogleId",
  default: "",
});
