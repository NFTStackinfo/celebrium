import styled from 'styled-components'

export const HowItWorksStyle = styled.section`
  padding-top: 120px;
  margin-top: 40px;

  .wrapper {
    background-image: ${({ theme }) => theme.colors.gradient};
    padding: 96px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 80px 0;
    }
  }

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
