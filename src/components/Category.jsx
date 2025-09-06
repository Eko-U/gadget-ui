import styled from "styled-components";
import { Button } from "../pages/Home";

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  width: 25rem;
  gap: 0.5rem;
`;

const CategoryImage = styled.div`
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #b4b4b4;

  & img {
    height: 17rem;
  }
`;

const CategoryContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Category() {
  return (
    <CategoryItem>
      <CategoryImage>
        <img src="./mi.webp" alt="The Category" />
      </CategoryImage>
      <CategoryContent>
        <p>Watches</p>
      </CategoryContent>
    </CategoryItem>
  );
}

export default Category;
