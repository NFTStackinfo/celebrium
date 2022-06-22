import styled from "styled-components";

export const FAQStyle = styled.section`
  padding-top: 160px;

  .content {
    >h3 {
      text-align: center;
      margin-bottom: 24px;
    }
  }


  .Collapsible {
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      background-image: ${({ theme }) => theme.colors.gradient};
    }
  }

  .Collapsible__trigger {
    display: block;

    &.is-open {
      // background-color: ${({ theme }) => theme.colors.white};

      & + .Collapsible__contentOuter {
        // background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .Collapsible__contentInner {
    font-size: ${({ theme }) => theme.font.size.s1};
    padding-bottom: 24px;

    p {
      &:not(:last-child) {
        padding-bottom: 20px;
      }
    }
  }

  .trigger-inner {
    position: relative;
    cursor: pointer;
    padding: 24px 0;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.s1};
    display: flex;
    justify-content: space-between;

    .icon {
      flex-shrink: 0;
      margin-left: 24px;
    }
  }
`;
