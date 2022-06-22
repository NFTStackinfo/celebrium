import styled from 'styled-components'

export const ConnectButtonStyle = styled.div`
  .mint-content {
    display: inline-flex;
    align-items: center;
    gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      gap: 16px;
      flex-direction: column;
    }
  }

  .mint-input {
    background-color: ${({ theme }) => theme.colors.dark};
    display: flex;
    justify-content: center;
    gap: 24px;
    border-radius: 40px;
    padding: 8px 16px;
    height: 48px;

    >span {
      width: 22px;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }


    button {
      background: transparent;
      border: none;
      cursor: pointer;
      height: auto;

      &[disabled] {
        cursor: default;

        .icon path {
          fill: hsla(0, 0%, 100%, 0.5) !important;
        }
      }
    }
  }

  .warn-text {
    padding: 24px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkText};
  }
`
