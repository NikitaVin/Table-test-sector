import React, { FC } from 'react';
import { TableBody, TableRow } from '../../Table.styles';
import { TableCellMainWrap } from './TableCellMain.styles';
import { Text } from '../../../../App.styles';

interface ITableCellMain {
  userId: number;
  title: string;
  body: string;
}

export const TableCellMain: FC<ITableCellMain> = ({ userId, title, body }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCellMainWrap isUserId>
          <Text mainCell>{userId}</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text mainCell>{title}</Text>
        </TableCellMainWrap>
        <TableCellMainWrap>
          <Text mainCell>{body}</Text>
        </TableCellMainWrap>
      </TableRow>
    </TableBody>
  );
};
