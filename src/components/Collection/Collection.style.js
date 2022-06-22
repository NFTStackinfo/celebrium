import styled from 'styled-components'

export const CollectionStyle = styled.section`
  padding-top: 120px;

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

    >p {
      margin-top: 8px;
    }

    > *{
      text-align: center;
    }
  }
`
export const CollectionItemStyle = styled.div`
  max-width: 357px;
  width: 100%;
  text-align: left;

  img {
    border-radius: 16px;
    width: 100%;
    margin-bottom: 24px;
  }

  .name {
    font-size: ${({theme}) => theme.font.size.s1};
    margin-bottom: 16px;
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
