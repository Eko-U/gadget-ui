import styled from "styled-components";

import Product from "./Product";
import Button from "./Button";
import Heading from "./Heading";

const FeaturesContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media only screen and (max-width: 24.375em) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  @media only screen and (max-width: 62.5em) {
    gap: 2rem;
  }

  @media only screen and (max-width: 47.25em) {
    gap: 1.5rem;
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
