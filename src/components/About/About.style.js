import styled from "styled-components";

export const AboutStyle = styled.section`
  padding-top: 120px;
  padding-bottom: 40px;

  .content {
    display: grid;
    justify-items: center;

    .text {
      width: 100%;
      margin-top: 40px;
      display: grid;
      row-gap: 32px;

      >div {
        max-width: 548px;

        :nth-child(even) {
          justify-self: end;
        }
      }
    }
  }
`;
