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
        font-size 1.8rem;
        padding: .7rem 1.5rem;
      }

      @media only screen and (max-width: 37.5em) {
     font-size: 1.3rem;
        padding: .5rem 1rem;

    }

  &:hover {
    background-color: grey;
    color: #fff;
  }

  
`;

export default Button;
