import React from "react";
import styled from "styled-components";
import { AppColors } from "../../utils/Appcolors";

const InputTypes = styled.input`
  border: ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  color: ${AppColors.whiteText};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  transform: translateX(-50%);
  font-size: ${({fontSize}) => fontSize};

  &&::-webkit-input-placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;

const Input = ({
  border,
  backgroundColor,
  width,
  height,
  padding,
  placeholderColor,
  borderRadius,
  textPlaceholder,
  position,
  top,
  bottom,
  left,
  right,
  fontSize,
  type,
  onChange
}) => {
  return (
    <InputTypes
      border={border}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      padding={padding}
      placeholderColor={placeholderColor}
      borderRadius={borderRadius}
      placeholder={textPlaceholder}
      position={position}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      fontSize={fontSize} 
      type={type}
      onChange={onChange}
    ></InputTypes>
  );
};

export default Input;
