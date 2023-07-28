import React, { FC } from 'react';
import { colors } from '../../styles/colors';
import { ButtonSpan, ButtonStyle } from './Button.styles';
import { ButtonText } from '../../App.styles';

interface IButton {
  text?: String;
  color?: string;
  margin?: string;
  padding?: string;
  disabled?: boolean;
  sort?: boolean;
  onClick?: () => void;
}

export const Button: FC<IButton> = ({ text = '', color = '', onClick }) => {
  let backgroundColor = '';
  let fontColor = '';
  switch (color) {
    case 'footer':
      backgroundColor = colors.white;
      fontColor = colors.textAndTable;
      break;
  }
  return (
    <>
      <ButtonStyle onClick={onClick} color={backgroundColor}>
        <ButtonSpan color={fontColor}>
          <ButtonText>{text}</ButtonText>
        </ButtonSpan>
      </ButtonStyle>
    </>
  );
};
