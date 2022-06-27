import styled from 'styled-components'

export const ContentStyle = styled.div`
  margin-top: 60px;

  .content {

  &__video {
    margin-bottom: 60px;
    max-height: 415px;

    video {
      max-width: 100%;
      width: 100%;
      max-height: 415px;
      display: block;
    }
  }

    &__text {
      margin-top: 24px;
      display: grid;
      text-align: left;
      row-gap: 24px;

      a {
        text-decoration: underline;
      }
    }
  }

`
