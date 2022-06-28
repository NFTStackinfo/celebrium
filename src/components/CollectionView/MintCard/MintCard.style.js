import styled from 'styled-components'

export const MintCardStyle = styled.div`
  margin-top: 24px;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }

  .collection {
    &-img {
      border-radius: 16px;
      overflow: hidden;
      background-image: ${({ theme }) => theme.colors.gradient};
      //padding: 2px;
      padding: 1px;
      height: fit-content;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          max-width: 356px;
        margin: 0 auto;
      }

      img {
        display: block;
        width: 100%;
        border-radius: 16px;
        max-width: 100%;
      }
    }

    &-description {
      margin-top: 32px;

      .description {
        margin-top: 16px;

        p {
          color: rgba(255, 255, 255, .6);
        }
      }

      .collection__actions {
        margin-top: 24px;

        .collection-btn {
          &-credit-card, &-crypto > button {
            width: 100%;
          }

          &-crypto {
            margin-top: 24px;
          }
        }
      }

      .about {
        margin-top: 24px;

        a {
          text-decoration: underline;
        }
      }
    }
  }
`
