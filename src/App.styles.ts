import styled from '@emotion/styled';
import { colors } from './styles/colors';

export const DivRoot = styled.div({});

export const DivApp = styled.div({
  marginTop: '6%',
  marginBottom: '6%',
  marginLeft: '6%',
  marginRight: '6%',
});

export const Text = styled.span<{
  isInherit?: boolean;
  tableHead?: boolean;
  marginRight?: number;
  cursor?: string;
  mainCell?: boolean;
}>(
  {
    fontSize: '14px',
    fontWeight: '400',
    '@media (max-width: 769px)': {
      fontSize: '16px',
    },
    '@media (max-width: 426px)': {
      fontSize: '16px',
    },
    '@media (max-width: 321px)': {
      fontSize: '18px',
    },
  },
  ({ marginRight }) => ({
    marginRight: `${marginRight}px`,
    '@media (max-width: 769px)': {
      marginRight: '0px',
    },
    '@media (max-width: 426px)': {
      marginRight: '0px',
    },
    '@media (max-width: 321px)': {
      marginRight: '0px',
    },
  }),
  ({ isInherit }) => ({
    background: isInherit ? '' : 'inherit',
  }),
  ({ mainCell }) => ({
    maxHeight: mainCell ? '64.4px' : '',
  }),
  ({ tableHead, cursor }) => ({
    color: tableHead ? `${colors.white}` : '',
    cursor,
  })
);

export const ButtonText = styled.p<{ isInherit?: boolean }>(
  {
    fontSize: '24px',
    fontWeight: '400',
    background: 'inherit',
    color: 'inherit',
    '@media (max-width: 769px)': {
      fontSize: '22px',
    },
    '@media (max-width: 426px)': {
      fontSize: '20px',
    },
    '@media (max-width: 321px)': {
      fontSize: '14px',
    },
  },
  ({ isInherit }) => ({
    color: isInherit ? '' : 'inherit',
  })
);

export const H2 = styled.h2({
  fontSize: '20px',
  fontWeight: '800',
  '@media (max-width: 769px)': {
    fontSize: '22px',
  },
  '@media (max-width: 426px)': {
    fontSize: '24px',
  },
  '@media (max-width: 321px)': {
    fontSize: '26px',
  },
});
