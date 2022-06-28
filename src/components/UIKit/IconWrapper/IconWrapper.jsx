import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icons/Icon'
import { theme } from '../../../styles/global/theme'

const IconWrapperStyle = styled.a`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  .icon {
    path {
      transition: 0.3s;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`

function IconWrapper({
                       color = theme.colors.white,
                       size = 32,
                       icon,
                       className = '',
                       iconClassName = '',
                       onClick,
                       ...props
                     }) {
  return (
    <IconWrapperStyle
      as={props.href ? 'a' : 'button'}
      {...props}
      className={className}
      onClick={onClick}
    >
      <Icon
        className={iconClassName}
        color={color}
        size={size}
        name={icon}
      />
    </IconWrapperStyle>
  )
}

export default IconWrapper
