import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.5rem;
      text-transform: uppercase;

      @media only screen and (max-width: 62.5rem) {
        font-size 2.8rem;
      }

      @media only screen and (max-width: 37.5em) {
     font-size: 2.4rem;
    }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3.5rem;


        @media only screen and (max-width: 62.5rem) {
        font-size 2.5rem;
      }

      @media only screen and (max-width: 37.5em) {
     font-size: 1.9rem;
    }
    `}
`;

export default Heading;
