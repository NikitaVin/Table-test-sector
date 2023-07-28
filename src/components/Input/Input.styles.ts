import { colors } from './../../styles/colors';
import styled from '@emotion/styled';

export const MyInputStyle = styled.span({
  position: 'relative',
  display: 'flex',
  border: `1px solid ${colors.border}`,
  backgroundColor: `${colors.input}`,
  width: '50%',
  height: '52px',
  paddingLeft: '26px',
  paddingRight: '15px',
});

export const P = styled.p({
  margin: '5px',
  fontWeight: '400',
  fontSize: '14px',
  '@media (max-width: 769px)': {
    fontSize: '17px',
  },
  '@media (max-width: 426px)': {
    fontSize: '18px',
  },
  '@media (max-width: 321px)': {
    fontSize: '20px',
  },
});

export const InputArea = styled.input<{ padding?: string }>(
  {
    width: '100%',
    fontSize: '13px',
    fontWeight: '400',
    padding: '8px 4px 8px 0px',
    alignItems: 'center',
    backgroundColor: `${colors.input}`,
    outline: 'none',
    border: 0,
    borderRadius: '4px',
    '@media (max-width: 769px)': {
      fontSize: '17px',
    },
    '@media (max-width: 426px)': {
      fontSize: '18px',
    },
    '@media (max-width: 321px)': {
      fontSize: '20px',
    },
    '&::placeholder': {
      color: colors.placeHolder,
      fontSize: '14px',
      fontWeight: '400',
    },
  },
  ({ padding }) => ({
    padding: padding,
  })
);

export const IconContainer = styled.span<{
  marginLeft?: number;
  marginRight?: number;
}>(
  {
    display: 'flex',
    alignItems: 'center',
  },
  ({ marginLeft }) => ({
    marginLeft: marginLeft,
  }),
  ({ marginRight }) => ({
    marginRight: marginRight,
  })
);
