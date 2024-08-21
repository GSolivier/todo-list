import React from 'react';
import styled from 'styled-components';

const TitleProps = styled.h1`
    color: ${({color}) => color};
    font-weight: ${({fontWeight}) => fontWeight};
    font-size: ${({fontSize}) => fontSize};
    text-align: ${({textAlign}) => textAlign};
    margin-top: ${({marginTop}) => marginTop};
    font-family: "Open Sans", sans-serif;
    border: ${({border}) => border};
    width: ${({width}) => width};
`

const Title = ({
    textTitle,
    color,
    fontWeight,
    fontSize,
    textAlign,
    marginTop,
    border,
    width
}) => {
    return (
        <TitleProps
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            textAlign={textAlign}
            marginTop={marginTop}
            border={border}
            width={width}
        >
            {textTitle}
        </TitleProps>
    );
};

export default Title;