import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
    width: ${({width}) => width};
    height: ${({height}) => height};
    padding: ${({padding}) => padding};
    background-color: ${({backgroundColor}) => backgroundColor};
    border: ${({border}) => border};
    border-radius: ${({borderRadius}) => borderRadius};
    color: ${({color}) => color};
    font-size: ${({fontSize}) => fontSize};
    font-weight: ${({fontWeight}) => fontWeight};

    position: ${({position}) => position};
    top: ${({top}) => top} ;
    left: ${({left}) => left};
    bottom: ${({bottom}) => bottom};
    right: ${({right}) => right};

    &&:hover{
        cursor: pointer;
    }
`

const Button = ({
    width,
    height,
    padding,
    backgroundColor,
    border,
    borderRadius,
    textButton,
    color,
    fontSize,
    fontWeight,
    position,
    top,
    bottom,
    left,
    right,
    onClick
}) => {
    return (
       <ButtonBox
        width={width}
        height={height}
        padding={padding}
        backgroundColor={backgroundColor}
        border={border}
        borderRadius={borderRadius}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        position={position}
        top={top}
        right={right}
        left={left}
        bottom={bottom}
        onClick={onClick}
       >
        {textButton}
       </ButtonBox>
    );
};

export default Button;
