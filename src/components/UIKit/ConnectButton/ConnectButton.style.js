import styled from 'styled-components'

export const ConnectButtonStyle = styled.div`
  .mint-content {
    display: grid;
    row-gap: 24px;
  }

  .mint-input {
    height: 48px;
    padding: 12px 16px;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.size.s2};
    font-weight: 500;
    display: inline-grid;
    grid-template-columns: auto 32px auto;
    column-gap: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    //row-gap: 24px;
    > input {
      width: 100%;
      text-align: center;
      background-color: transparent;
      border: none;
      font-size: ${({ theme }) => theme.font.size.s1};
    }


    button {
      background: transparent;
      border: none;
      cursor: pointer;
      height: auto;

      &[disabled] {
        cursor: default;
        opacity: 0.5;
      }
    }
  }
`
