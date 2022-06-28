import { createGlobalStyle, keyframes } from 'styled-components'
import { generateSpaceClassNames } from '../../utils/utils'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const GlobalStyle = createGlobalStyle`
  /*reset*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  article, aside, details, figcaption, figure, dialog,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul, ul li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;

    &:before, &:after {
      content: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 100%;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * Paul Irish box sizing reset so all elements have broder-box.
   */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  /**
   * custom smarty resets
   */
  a {
    text-decoration: none;
  }

  button, input, a, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*global*/
  body {
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.font.size.s2};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.03em;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .main-wrapper {
    background-image: url("/assets/bg-img-right.png"), url("/assets/bg-img-left.png");
    background-repeat: no-repeat;
    background-position-y: 12%, 18.8%;
    background-position-x: right, left;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      background-image: url("/assets/bg-img-left.png");
      background-position-y: 17%;
      background-position-x: left;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      background-position-y: 11%;
    }
  }

  .collection-wrapper {
    padding-top: 80px;

    .back-wrapper {
      margin-top: 60px;
    }
  }

  //typography
  h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5, p, a, button {
    font-weight: 500;
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5 {
    font-family: ${({ theme }) => theme.font.primary};
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.font.size.h1.base};
    line-height: 1.166;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.font.size.h2.base};
      line-height: 1.2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.font.size.h3.base};
      line-height: 1.22;
    }
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.font.size.h2.base};
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.font.size.h3.base};
      line-height: 1.22;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.font.size.h4};
      line-height: 1.25;
      letter-spacing: normal;
    }
  }

  h3, .h3 {
    font-size: ${({ theme }) => theme.font.size.h3.base};
    line-height: 1.22;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.font.size.h4};
      line-height: 1.25;
      letter-spacing: normal;
    }
  }

  h4, .h4 {
    font-size: ${({ theme }) => theme.font.size.h4};
    line-height: 1.25;
    letter-spacing: normal;
  }

  h5, .h5 {
    font-size: ${({ theme }) => theme.font.size.h5};
    line-height: 1.33;
    letter-spacing: normal;
  }

  .s1 {
    font-size: ${({ theme }) => theme.font.size.s1};
    line-height: 1.4;
  }

  .s2 {
    font-size: ${({ theme }) => theme.font.size.s2};
    line-height: 1.5;
  }

  .overline {
    font-size: ${({ theme }) => theme.font.size.overline};
    line-height: 1.428;
    letter-spacing: normal;
  }
  //typography

  // components
  .container, .container-md, .container-sm {
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 16px;
    }
  }

  .container {
    max-width: 1200px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 1152px;
    }

    &-md {
      max-width: 1010px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 962px;
      }
    }

    &-sm {
      max-width: 818px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 770px;
      }
    }

    &-xs {
      max-width: 360px;
      width: 100%;
    }
  }
  // components



  /*colors*/
  .color-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .text {
    &-gradient {
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    &-center {
      text-align: center;
    }
  }

  /*animations*/
  .animated {
    opacity: 0;
  }

  .fade-in {
    animation: ${fadeIn} .5s ease-in forwards;
  }


  body > iframe {
    pointer-events: none; /*for development*/
  }

  .list-dash {
    margin-left: 20px;

    li {
      list-style-type: '- ';
      margin-bottom: 12px;

      p {
        padding-bottom: 0 !important;
      }
    }
  }

  .warn-text {
    padding: 24px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkText};
  }

  ${({ theme }) => generateSpaceClassNames(theme.spaces)}
`
