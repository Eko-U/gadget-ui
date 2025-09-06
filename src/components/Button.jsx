import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: inherit;
  font-family: inherit;
  text-transform: uppercase;

  border: 2px solid grey;
  transition: all 0.2s;

  @media only screen and (max-width: 62.5rem) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.8rem;
  }

  &:hover {
    background-color: grey;
    color: #fff;
  }
`;

export default Button;
