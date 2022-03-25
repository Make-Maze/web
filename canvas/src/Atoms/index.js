import { atom } from "recoil";

export const Title = atom({
  key: "Title",
  default: "",
});

export const Login = atom({
  key: "Login",
  default: true,
});

export const Liked = atom({
  key: "Liked",
  default: [],
});

export const GoogleId = atom({
  key: "GoogleId",
  default: "",
});

export const Name = atom({
  key: "Name",
  default: "",
});

export const Img = atom({
  key: "Img",
  default: "",
});

export const Email = atom({
  key: "email",
  default: "",
});

export const Profile = atom({
  key: "profile",
  default: {
    googleId: "",
    name: "",
    email: "",
    img: "",
  },
});
