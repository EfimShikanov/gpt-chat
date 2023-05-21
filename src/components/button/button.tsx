import React, { memo } from "react";
import { Wrapper } from "./styles";

interface IButtonProps {
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
  return <Wrapper onClick={onClick}>+</Wrapper>;
};

export default memo(Button);
