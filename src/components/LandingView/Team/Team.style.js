import styled from "styled-components";

export const TeamStyle = styled.section`
  margin-top: 40px;
  padding-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-top: 0;
  }

.title-content {
  text-align: center;

  .text {
    margin-top: 24px;
    display: grid;
    row-gap: 24px;
  }
}

  .team-list {
    display: grid;
    row-gap: 24px;
    margin-top: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        row-gap: 16px;
    }
  }
`
