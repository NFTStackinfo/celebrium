import styled from "styled-components";

export const FooterStyle = styled.footer`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  padding-top: 160px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 0;
  }

  .social {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    column-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .content {
      flex-direction: column;
    }
    .social {
      padding-top: 20px;
    }
    .footer-bottom {
      top: 0;
      display: flex;
      align-items: center;
    }
  }
`;
