import styled from 'styled-components'

export const RoadmapItemStyle = styled.div`
  display: flex;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 24px;
  }

  &.space {
    margin-bottom: 8px;

    .content {
      padding-bottom: 40px;
    }
  }

  &.r {
    justify-content: end;

    .content {
      margin-left: 44px;
    }
  }

  &.l {
    flex-direction: row-reverse;
    justify-content: start;

    .content {
      margin-right: 44px;
    }
  }

  &.roadmap-item-1 {
    .progress-overlay {
      .progress__circle {
        background-color: #EC4E27;
      }

      .progress__bar {
        background-image: linear-gradient(201.72deg, #EC4E27 14.24%, #7EC1FF 179.97%);;
      }
    }
  }

  &.roadmap-item-2 {
    .progress-overlay {
      .progress__circle {
        background-color: #C27B7B;
      }

      .progress__bar {
        background-image: linear-gradient(206.38deg, #EC4E27 -27.34%, #7EC1FF 146.1%);
      }
    }
  }

  &.roadmap-item-3 {
    .progress-overlay {
      .progress__circle {
        background-color: #A896AD;
      }

      .progress__bar {
        background-image: linear-gradient(204.17deg, #EC4E27 -185.68%, #7EC1FF 110.72%);
      }
    }
  }

  &.roadmap-item-4 {
    .progress-overlay {
      .progress__circle {
        background-color: #8CB4E5;
      }

      .progress__bar {
        background-image: linear-gradient(205.18deg, #EC4E27 -266.23%, #7EC1FF 66.35%);
      }
    }
  }

  .progress {
    width: 40px;
    height: auto;
    flex-shrink: 0;
    position: relative;
    display: grid;
    justify-items: center;

    &__circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0.2;
    }

    &__bar {
      height: calc(100% - 12px - 24px);
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0.2;
      border-radius: 8px;
      width: 6px;
      margin-inline: auto;
      margin-top: 12px;
    }

    &-overlay {
      width: 100%;
      position: absolute;
      z-index: 2;
      top: 0;
      height: 100px;
      overflow: hidden;

      .progress__circle {
        opacity: 1;
      }

      .progress__bar {
        opacity: 1;
      }
    }
  }

  .content {
    height: fit-content;
    max-width: 496px;

    > h4 {
      margin-top: 8px;
      text-transform: uppercase;
    }

    .description {
      margin-top: 4px;
    }
  }
`
