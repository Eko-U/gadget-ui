import styled from "styled-components";
import Button from "../components/Button";

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  width: 25rem;
  gap: 0.5rem;

  @media only screen and (max-width: 47.25em) {
    width: auto;
  }

  @media only screen and (max-width: 24.375em) {
    flex: 1 1 calc(50% - 1.5rem);
  }
`;

const ProductImage = styled.div`
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #b4b4b4;

  @media only screen and (max-width: 47.25em) {
    height: auto;
    padding: 2rem;
  }

  & img {
    height: 17rem;

    @media only screen and (max-width: 47.25em) {
      height: 8rem;
    }
  }
`;

const ProductContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;

  & button {
    padding: 0.4rem;
    align-self: flex-start;
    font-size: 1rem;
    border-radius: 5px;
  }
`;

const ProductName = styled.p`
  @media only screen and (max-width: 23.625em) {
    font-size: 1rem;
  }
`;

const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 1.5rem;

  @media only screen and (max-width: 23.625em) {
    font-size: 1.2rem;
  }
`;

function Product() {
  return (
    <ProductItem>
      <ProductImage>
        <img src="./mi.webp" alt="The product" />
      </ProductImage>
      <ProductContent>
        <ProductName>Iphone 14 Pro Max</ProductName>
        <ProductPrice>N1,400,000</ProductPrice>
        <Button>Add to Cart</Button>
      </ProductContent>
    </ProductItem>
  );
}

export default Product;
