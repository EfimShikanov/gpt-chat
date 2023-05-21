import React, { memo } from "react";
import { Wrapper } from "./styles";

interface IInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<IInputProps> = ({ value, onChange }) => {
  return (
    <Wrapper>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

export default memo(Input);
