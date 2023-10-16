import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PasswordRestore from "../pages/PasswordRestore/PasswordRestore";
import Layout from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectToken } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Register = lazy(() => import("../pages/Register/Register.jsx"));
const Login = lazy(() => import("../pages/Login/Login.jsx"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
      return;
    }
    if (!token) {
      <Navigate to="/login" />;
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <b>Fetching user data...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} redirectTo="/" />}
          />
          <Route
            path="register"
            element={<RestrictedRoute component={Register} redirectTo="/" />}
          />
          <Route
            path="password_restoring"
            element={
              <RestrictedRoute component={PasswordRestore} redirectTo="/" />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
