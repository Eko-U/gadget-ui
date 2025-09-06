import styled from "styled-components";

import Product from "./Product";
import Button from "./Button";
import Heading from "./Heading";

const FeaturesContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  & button {
    align-self: center;
  }

  @media only screen and (max-width: 24.375em) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  justify-content: center;
  gap: 4rem;

  @media only screen and (max-width: 31.25em) {
    grid-template-columns: 1fr 1fr;
  }

  & button {
    align-self: start;
    padding: 0.8rem 1.7rem;
  }
`;

function Features() {
  return (
    <FeaturesContainer>
      <Heading as="h2">Featured Products</Heading>

      <ProductContainer>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>

      <Button>View All Products</Button>
    </FeaturesContainer>
  );
}

export default Features;
