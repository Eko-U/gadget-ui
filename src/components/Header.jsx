import styled from "styled-components";

import Heading from "./Heading";
import Button from "./Button";

const HeaderContainer = styled.header`
  display: flex;
  padding: 5rem;

  height: 70vh;
  background-color: #e0e0e0;

  @media only screen and (max-width: 62.5rem) {
    padding: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    height: auto;
    padding: 6rem;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;

  @media only screen and (max-width: 37.5em) {
    gap: 0.5rem;
  }

  & button {
    align-self: flex-start;
    margin-top: 1.4rem;

    @media only screen and (max-width: 37.5em) {
      align-self: center;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <hgroup>
          <Heading as="h1">Buy gadgets</Heading>
          <Heading as="h2">that last.</Heading>
        </hgroup>
        <Paragraph>
          our shop provide the perfect & best quality product
        </Paragraph>
        <Button>shop now</Button>
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;
