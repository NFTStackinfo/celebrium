import styled, { css } from 'styled-components'

export const ButtonStyle = styled.a`
  height: 48px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.s2};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;

  .icon {
    margin-right: 10px;

    path {
      transition: 0.3s;
    }
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      border: 1px solid transparent;
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};

      &:hover {
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
      background-image: ${({ theme }) => theme.colors.gradient};

      &:hover {
        background-image: none;
        border: 1px solid ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
      }
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.white};

      &:hover {
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
