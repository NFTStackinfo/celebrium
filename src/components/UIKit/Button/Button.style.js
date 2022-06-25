import styled, { css } from 'styled-components'

export const ButtonStyle = styled.a`
  height: 48px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.s2};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;

  .icon {
    margin-right: 10px;

    path {
      transition: 0.3s;
    }
  }

  &:disabled {
    cursor: default;
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      border: 1px solid transparent;
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};

      &:hover:not(:disabled) {
        border: 1px solid ${({ theme }) => theme.colors.white};
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
      }
    `}
  ${({ variant }) =>
    variant === 'gold' &&
    css`
      border: 1px solid transparent;
      color: ${({ theme }) => theme.colors.black};
      position: relative;
      overflow: hidden;
      z-index: 1;

      ::before, ::after {
        content: "";
        transition: 0.3s;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      ::before {
        background-image: ${({ theme }) => theme.colors.gradient};
      }

      &:hover:not(:disabled) {
        ::after {
          background-color: ${({ theme }) => theme.colors.white};
        }
      }
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.white};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.black} !important;
          }
        }
      }
    `}
  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`
