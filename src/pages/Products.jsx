import styled from "styled-components";
import Product from "../components/Product";

const ProductsContainer = styled.div`
  padding: 5rem;
  display: grid;
  flex-direction: column;
  gap: 5rem;

  @media only screen and (max-width: 28.75em) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }

  @media only screen and (max-width: 18.125em) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 47.25em) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 25.3125em) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 18.125em) {
    grid-template-columns: 1fr;
  }
`;

function Products() {
  return (
    <ProductsContainer>
      <ProductContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>
    </ProductsContainer>
  );
}

export default Products;
