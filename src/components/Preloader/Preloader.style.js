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
  background-color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.secondary};
  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }

  .content {
    text-align: center;

    img {
      margin: 0 auto;
    }
  }

  .progress {
    width: 200px;
    height: 8px;
    margin-top: 64px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors['light-black']};


    .progress-inner {
      background: ${({ theme }) => theme.colors['gradient']};
      border-radius: 8px;
      height: 100%;
      transition: .3s;

      &.box-shadow {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['light-black']};
      }
    }
  }
}
@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
  .progress {
    width: 280px;
  }
`;
