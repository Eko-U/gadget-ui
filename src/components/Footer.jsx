import styled from "styled-components";

const FooterLayout = styled.footer`
  background-color: #edebeb;
  padding: 2rem;
`;

const FooterDownDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 35.1875em) {
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (max-width: 25.3125em) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const FooterDownDivSocial = styled.div`
  display: flex;
  gap: 4rem;

  @media only screen and (max-width: 25.3125em) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-weight: 400;
  font-style: italic;
`;

function Footer() {
  return (
    <FooterLayout>
      <FooterDownDiv>
        <FooterDownDivSocial>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </FooterDownDivSocial>

        <Copyright>
          &copy;{new Date().getFullYear()} &mdash; AccessMoreGadgets
        </Copyright>
      </FooterDownDiv>
    </FooterLayout>
  );
}

export default Footer;
