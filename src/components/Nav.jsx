import styled from "styled-components";

const NavEl = styled.nav`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #b9b9b9;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;

  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`;

function Nav() {
  return (
    <NavEl>
      <img alt="Logo of Accessmoregadgets" />
      <NavList>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>About us</li>
      </NavList>
    </NavEl>
  );
}

export default Nav;
