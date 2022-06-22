import styled from "styled-components";

export const LoaderStyle = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  transition: .5s;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.font.secondary};
  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }

  .content {
    text-align: center;
  }


  .percent {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;

    p {
      font-size: ${({ theme }) => theme.font.size.subheading2};
      width: 64px;
      text-align: center;
    }
  }
  .progress {
    width: 370px;
    height: 9px;
    margin-top: 24px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.white};


    .progress-inner {
      background-color: ${({ theme }) => theme.colors.darkText};
      border-radius: 50px;
      height: 100%;
      transition: .3s;

      &.box-shadow {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.darkText};
      }
    }
  }
}
@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
  .progress {
    width: 280px;
  }
`;
