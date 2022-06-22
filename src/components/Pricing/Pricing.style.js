import styled from "styled-components"

export const PricingStyle = styled.section`
  padding-top: 160px;


    .title {
      text-align: center;
      padding-bottom: 40px;
    }

  .price-block {
    display: flex;
    justify-content: center;
    max-width: 700px;
    margin: 0 auto 32px;

    &-left, &-right {
      padding: 0 12px;
      text-align: center;
      width: 50%;
    }

    &-left {
      border-right: 1px solid ${({theme}) => theme.colors['gold']};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;

      &-left, &-right {
        width: 100%;
        padding: 0;
      }

      &-left {
        border-right: none;
        border-bottom: 1px solid ${({theme}) => theme.colors['gold']};
        padding-bottom: 16px;
        margin-bottom: 16px;
      }
    }
  }

  .price-table {
    margin-top: 80px;
  }


`
