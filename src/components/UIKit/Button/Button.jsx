import * as React from "react"
import { ButtonStyle } from "./Button.style"
import { theme } from "../../../styles/global/theme"
import { Icon } from "../Icons/Icon"

export const Button = ({
                         className,
                         children,
                         variant = "primary",
                         onClick,
                         iconName,
                         ...props
                       }) => {
  return (
    <ButtonStyle
      variant={variant}
      onClick={onClick}
      className={className}
      rel="noreferrer"
      as={props?.href ? "a" : "button"}
      {...props}
    >
      {iconName && <Icon name={iconName} color={theme.colors.white} />}
      {children}
    </ButtonStyle>
  )
}
