import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: auto;

    &.open {
      background-color: ${({ theme }) => theme.colors.black};

      .header-nav {
        height: calc(100% - 80px);
      }
    }
  }

  .hamburger {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-left: 8px;
      display: inline-block;
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 0;
    }
  }

  .logo {
    max-width: 252px;
    width: 100%;
    margin-right: 24px;
    display: block;
    cursor: pointer;

    img {
      width: 100%;
      display: block;
    }
  }

  .header-nav {
    flex: 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      position: fixed;
      top: 80px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.black};
    }

    .header-nav-inner {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        min-height: calc(100vh - 80px);
        padding-top: 120px;
        padding-bottom: 24px;

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            padding-top: 80px;
        }
      }
    }

    .header-nav-list {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      column-gap: 24px;
      margin-left: 32px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-auto-flow: unset;
        grid-template-columns: 1fr;
        row-gap: 24px;
      }

      > li {
        cursor: pointer;
        line-height: 1;
        position: relative;
        font-family: ${({ theme }) => theme.font.secondary};
        letter-spacing: 0.03em;
        font-weight: 500;

        @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
          margin-right: 0;
          font-size: ${({ theme }) => theme.font.size.h5};
          text-align: center;
          width: 100%;

          ::after {
            content: none;
          }
        }

        &:after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          height: 2px;
          width: 100%;
          background: transparent;
          transition: 0.3s;
          border-radius: 6px;
        }

        &:hover {
          &:after {
            background: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }

    .copyright {
      display: none;
    }

    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  .social {
    display: grid;
    column-gap: 16px;
    grid-auto-flow: column;
    grid-auto-columns: max-content;

    &.mobile {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;

      &.mobile {
        justify-content: center;
        display: flex;
        margin-top: 80px;
        margin-bottom: 24px;
      }
    }
  }
`
