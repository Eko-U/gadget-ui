import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  /* max-width: 120rem; */
`;

function AppLayout() {
  return (
    <>
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;
