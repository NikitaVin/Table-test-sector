import styled from '@emotion/styled';

export const IconWrapper = styled.span<{
  transform?: string;
}>(
  {
    alignItems: 'center',
    width: '16px',
  },

  ({ transform }) => ({
    transform: transform,
  })
);

export const TableCellWrap = styled.div<{
  color?: string;
  backGroundColor?: string;
}>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 19,
    paddingBottom: 16,
    paddingLeft: '20%',
    paddingRight: 8,
    '@media (max-width: 769px)': {
      paddingTop: 14,
      paddingBottom: 11,
      paddingRight: 5,
      flexDirection: 'column',
    },
    '@media (max-width: 426px)': {
      paddingTop: 9,
      paddingBottom: 6,
      paddingRight: 2,
      flexDirection: 'column',
    },
    '@media (max-width: 321px)': {
      paddingTop: 5,
      paddingBottom: 4,
      paddingRight: 1,
      flexDirection: 'column',
    },
  },
  ({ color }) => ({
    color: color,
  }),
  ({ backGroundColor }) => ({
    background: backGroundColor,
  })
);
