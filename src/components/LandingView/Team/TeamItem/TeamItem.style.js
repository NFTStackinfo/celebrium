import styled from 'styled-components';

export const TeamItemStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    row-gap: 16px;
    justify-items: center;
  }

  .image {
    max-width: 262px;
    width: 100%;

    img {
      max-width: 100%;
      display: block;
      width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 328px;
    }
  }

  .info {
    align-self: center;

    .position {
      opacity: 0.6;
      margin-top: 4px;
    }

    .about {
      margin-top: 16px;
    }
  }
`
