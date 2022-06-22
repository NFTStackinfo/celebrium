import * as React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";
import { theme } from "../../../styles/global/theme";

export const Icon = ({
  color = theme.colors.white,
  size = 24,
  name,
  className = "",
  onClick,
}) => {
  return (
    <IcomoonReact
      onClick={onClick}
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
    />
  );
};
