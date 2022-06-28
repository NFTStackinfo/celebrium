import styled from 'styled-components'

export const CreditCardModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  opacity: 0;

  &.active {
    z-index: 100;
    opacity: 1;
  }

  .container-xs {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  .content {
    background-color: #FFFFFF;
    border-radius: 16px;
    //max-width: 300px;
    width: 100%;
    padding: 16px 30px 0;
    //padding: 24px;
    overflow-y: scroll;
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
      //margin-top: 24px;
      height: fit-content;
      align-self: center;
    }
  }
`
