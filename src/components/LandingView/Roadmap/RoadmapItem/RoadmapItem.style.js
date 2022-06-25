import styled from 'styled-components'

export const RoadmapItemStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 496px) 40px  minmax(auto, 496px);
  height: fit-content;
  column-gap: 44px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 40px  minmax(auto, auto);
    column-gap: 16px;
  }

  &.last {
    .content {
      padding-bottom: 146px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
          padding-bottom: 80px;
      }
    }
  }

  &.only-line {
    height: ${({ lineHeight }) => lineHeight}px;
  }

  @media (min-width: 768px) {
    &.r {
      .content.left {
        opacity: 0 !important;
        pointer-events: none !important;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
      }
    }

    &.l {
      .content.right {
        opacity: 0 !important;
        pointer-events: none !important;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
      }
    }
  }

  .progress-overlay {
    .progress__circle {
      background-color: #EC4E27;
    }

    .progress__bar {
      background-color: ${({ theme }) => theme.colors.gold};
    }
  }

  .progress {
    width: 40px;
    height: auto;
    flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__circle {
      min-width: 24px;
      min-height: 24px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      position: relative;
      z-index: 10;

      &.active {
        min-width: 32px;
        min-height: 32px;
        background-color: ${({ theme }) => theme.colors.black};
        border: 4px solid ${({ theme }) => theme.colors.gold}
      }
    }

    &__bar {
      //height: calc(100% + 16px);
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 8px;
      width: 4px;
      position: absolute;
      top: 20px;
      bottom: -4px;
      z-index: 1;
      //margin-top: 12px;
    }

    &-overlay {
      width: 40px;
      height: auto;
      flex-shrink: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      .progress__circle {
        opacity: 1;
      }

      .progress__bar {
        opacity: 1;
      }
    }
  }

  .content-space {
    height: fit-content;
  }

  .content {
    height: fit-content;
    padding-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        &.left {
          display: none;
        }

      &.right {

      }
    }

    &.right {
      text-align: left;
    }

    &.left {
      text-align: right;
    }

    > h4 {
      margin-top: 8px;
    }

    .description {
      margin-top: 4px;
      text-transform: capitalize;
    }
  }
`
