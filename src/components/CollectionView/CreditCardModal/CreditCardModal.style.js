import styled from 'styled-components'

export const CreditCardModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  opacity: 0;
  overflow: auto;
  display: grid;
  justify-content: center;
  align-items: center;

  &.active {
    z-index: 100;
    opacity: 1;
  }

  .content {
    background-color: #FFFFFF;
    border-radius: 16px;
    width: 100%;
    padding: 16px 30px 0;
    height: fit-content;
    display: flex;
    flex-direction: column;


    .modal-header {
      align-self: center;
      width: 100%;

      &__btn-close {
        margin-left: auto;

        &:hover {
          background-color: rgba(0, 0, 0, 0.15);
        }
      }
    }

    .modal-body {
      height: fit-content;
      align-self: center;
    }
  }
`
