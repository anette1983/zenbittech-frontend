import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
// import { StyledFooter } from "./Layout.styled";
// import { StyledContainer, StyledSection } from "./Layout.styled";
// import { Header } from 'components/Header';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <StyledFooter></StyledFooter> */}
    </>
  );
};

export default Layout;
