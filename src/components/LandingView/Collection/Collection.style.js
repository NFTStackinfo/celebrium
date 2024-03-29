import styled from 'styled-components'

export const CollectionStyle = styled.section`
  padding-top: 120px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
  }

  .container-sm {
    .content {
      .text {
        margin-top: 40px;
        display: grid;
        row-gap: 16px;
      }
    }
  }

  .collection-wrapper {
    margin-top: 60px;

    > p {
      margin-top: 8px;
    }

    > * {
      text-align: center;
    }
  }

  .collection {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;
    padding-top: 32px;
    justify-content: center;

    &-item {
      padding: 12px;
      width: calc(100% / 3);
    }

    &.with-margin {
      margin-bottom: 60px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .collection {
      margin: -8px;

      &-item {
        padding: 8px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .collection {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;

      &-item {
        padding: 8px;
        width: 100%;
      }
    }
  }
`
export const CollectionItemStyle = styled.div`
  width: 100%;
  text-align: left;

  .img-wrapper {
    max-width: 356px;
    border-radius: 16px;
    overflow: hidden;
    background-image: ${({ theme }) => theme.colors.gradient};
    padding: 2px;
    margin: 0 auto;

    img {
      display: block;
      width: 100%;
      border-radius: 16px;
      max-width: 100%;
    }
  }


  .name {
    font-size: ${({ theme }) => theme.font.size.s1};
    margin-bottom: 16px;
    margin-top: 24px;
  }

  .description {
    margin-bottom: 16px;
    opacity: .5;
  }

  .collection-btn {
    width: 100%;
    text-align: center;
  }
`
