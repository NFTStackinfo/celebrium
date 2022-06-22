import styled from 'styled-components'

export const HowItWorksStyle = styled.section`
  margin-top: 160px;
  padding: 96px 0;
  background-image: ${({ theme }) => theme.colors.gradient};

  .content {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;

    .text {
      margin-top: 24px;
      display: grid;
      row-gap: 24px;
    }
  }
`
