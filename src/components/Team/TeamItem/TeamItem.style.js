import styled from 'styled-components';

export const TeamItemStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;

  .image {
    max-width: 262px;
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
