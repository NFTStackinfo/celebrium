import React from 'react'
import styled from 'styled-components'


const ParagraphStyle = styled.div`
  display: flex;
  align-items: start;
  width: 100%;

  img {
    margin: 4px 16px 0 4px;
  }
`

export const Paragraph = ({ children, className }) => (
  <ParagraphStyle className={className}>
    <img src="/assets/ellipse.svg" alt="ellipse" />
    <p>{children}</p>
  </ParagraphStyle>
)
