import React, { FC } from 'react';
import { SVGIcon } from '../../assets/icons/constansIcon';
import { MyInputStyle, IconContainer } from './Input.styles';
import { IInput } from './types';

export const Input: FC<IInput> = ({ svgForInput = '', marginLeft, marginRight, children }) => {
  return (
    <MyInputStyle>
      {children}
      <IconContainer marginLeft={marginLeft} marginRight={marginRight}>
        <SVGIcon icons={svgForInput} />
      </IconContainer>
    </MyInputStyle>
  );
};
