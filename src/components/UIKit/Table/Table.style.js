import styled from "styled-components"

export const TableWrapperStyle = styled.div`
  overflow: auto hidden;
  border: 1px solid ${({ theme }) => theme.colors.gold};

  table {

    tr {
      &:not(:last-child) {
        td {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
        }
      }
    }

    th {
      font-size: ${({ theme }) => theme.font.size.s1};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
      font-weight: 500;
      max-width: 180px;
      min-width: 180px;
      width: min-content;
      vertical-align: middle;

      &:last-child {
        min-width: ${({ lastColWidth }) => lastColWidth}px;
        max-width: 100%;
      }
    }

    td {
      font-size: ${({ theme }) => theme.font.size.s2};


      p {
        &:not(:first-child) {
          margin-top: 16px;
        }
      }
    }

    td, th {
      padding: 16px 12px;
      text-align: left;


      &:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.colors.gold};
      }

      &:nth-child(2) {
        text-align: center !important;
      }



      &:not(:first-child):not(:last-child) {
        text-align: right;
      }

      &:first-child {
        padding-right: 20px;
        position: sticky;
        left: 0;
        width: 180px;
        text-align: left;
        z-index: 9;
        background-color: ${({ theme }) => theme.colors.black};

        &:after {
          content: "";
          height: 100%;
          width: 100%;
          inset: 0;
          position: absolute;
          border-right: 1px solid transparent;
          background-color:transparent;
        }
      }


    }

    &.with-border {
      td, th {
        &:first-child {

          &:after {
            border-right-color: ${({ theme }) => theme.colors.gold};
          }
        }

      }
    }
  }

  /* width */
  ::-webkit-scrollbar {
    height: 13px;

  ;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({theme}) => theme.colors['light-black']};
    height: 6px;

    margin-left: 180px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.gold};
    border-radius: 50px;
    height: 6px;
    border: 3px solid ${({theme}) => theme.colors['light-black']};
  }

  /* Handle on hover */
  //::-webkit-scrollbar-thumb:hover {
  //  background: #555;
  //}
`

