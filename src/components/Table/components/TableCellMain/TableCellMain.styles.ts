import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';

export const TableCellMainWrap = styled.div<{
  isUserId?: boolean;
}>(
  {
    display: 'flex',
    alignItems: 'center',
    borderLeft: `0.5px solid ${colors.border}`,
    borderRigth: `0.5px solid ${colors.border}`,
    width: '100%',
    overflowY: 'auto',
    padding: '10px 10px 10px 10px',
  },
  ({ isUserId }) => ({
    justifyContent: isUserId ? 'center' : 'flex-start',
  })
);
