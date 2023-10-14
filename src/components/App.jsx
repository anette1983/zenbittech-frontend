// import { useState } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import PasswordRestore from "../pages/PasswordRestore";
import Layout from "./Layout/Layout";
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="password-restoring" element={<PasswordRestore />} />
        </Route>
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
