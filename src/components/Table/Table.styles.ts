import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const GridContainer = styled.div({});

export const TableHead = styled.div({});

export const TableRow = styled.div<{ backGroundColor?: string }>(
  {
    border: `1px solid ${colors.border}`,
    display: 'grid',
    minWidth: '100%',
    height: '10vh',
    gridTemplateColumns: '10% 49% 41%',
    columnGap: 0,
  },
  ({ backGroundColor }) => ({
    background: backGroundColor,
  })
);

export const TableBody = styled.div({});
