import React, { FC, useCallback } from 'react';
import { TableCell } from './components/TableCell/TableCell';
import { TableCellMain } from './components/TableCellMain/TableCellMain';
import { GridContainer, TableHead, TableRow } from './Table.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorSort,
  setSortByBodyDec,
  setSortByBodyInc,
  setSortByIdDec,
  setSortByIdInc,
  setSortByTitleDec,
  setSortByTitleInc,
} from '../../redux/slices/sort';
import { colors } from '../../styles/colors';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IPosts, postssSelector } from '../../redux/slices/posts';
import { sortingFoo } from '../../utils/sortingFoo';
import { filtredPaginatedOrders } from '../../utils/paginationFoo';
import { selectorSearch } from '../../redux/slices/search';

interface ITable {
  ordersPerPage: number;
  currentPage?: number;
}

export const Table: FC<ITable> = ({ ordersPerPage, currentPage }) => {
  const { items } = useSelector(postssSelector);
  const { searchValue } = useSelector(selectorSearch);
  const dispatch = useDispatch();
  const { sortByIdInc, sortByTitleInc, sortByBodyInc, sortByIdDec, sortByTitleDec, sortByBodyDec } =
    useSelector(selectorSort);

  const onClickSort = useCallback(
    (i: boolean, parametr: ActionCreatorWithPayload<boolean>) => {
      dispatch(parametr(i));
    },
    [dispatch]
  );

  return (
    <GridContainer>
      <TableHead>
        <TableRow backGroundColor={colors.textAndTable}>
          <TableCell
            backGroundColor={colors.textAndTable}
            color="white"
            title="ID"
            onClickSortByIdInc={(i) => onClickSort(i, setSortByIdInc)}
            onClickSortByIdDec={(i) => onClickSort(i, setSortByIdDec)}
            onClickSortByTitleInc={(i) => onClickSort(i, setSortByTitleInc)}
            onClickSortByTitleDec={(i) => onClickSort(i, setSortByTitleDec)}
            onClickSortByBodyInc={(i) => onClickSort(i, setSortByBodyInc)}
            onClickSortByBodyDec={(i) => onClickSort(i, setSortByBodyDec)}
          />
          <TableCell
            backGroundColor={colors.textAndTable}
            color="white"
            title="Заголовок"
            onClickSortByBodyInc={(i) => onClickSort(i, setSortByBodyInc)}
            onClickSortByBodyDec={(i) => onClickSort(i, setSortByBodyDec)}
            onClickSortByIdInc={(i) => onClickSort(i, setSortByIdInc)}
            onClickSortByIdDec={(i) => onClickSort(i, setSortByIdDec)}
            onClickSortByTitleInc={(i) => onClickSort(i, setSortByTitleInc)}
            onClickSortByTitleDec={(i) => onClickSort(i, setSortByTitleDec)}
          />
          <TableCell
            backGroundColor={colors.textAndTable}
            color="white"
            title="Описание"
            onClickSortByTitleInc={(i) => onClickSort(i, setSortByTitleInc)}
            onClickSortByTitleDec={(i) => onClickSort(i, setSortByTitleDec)}
            onClickSortByIdInc={(i) => onClickSort(i, setSortByIdInc)}
            onClickSortByIdDec={(i) => onClickSort(i, setSortByIdDec)}
            onClickSortByBodyInc={(i) => onClickSort(i, setSortByBodyInc)}
            onClickSortByBodyDec={(i) => onClickSort(i, setSortByBodyDec)}
          />
        </TableRow>
      </TableHead>
      {filtredPaginatedOrders(
        sortingFoo(
          items,
          sortByIdInc,
          sortByTitleInc,
          sortByBodyInc,
          sortByIdDec,
          sortByTitleDec,
          sortByBodyDec
        ).filter(
          (i: IPosts) =>
            i.userId === Number(searchValue) ||
            i.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            i.body.toLowerCase().includes(searchValue.toLowerCase())
        ),
        currentPage,
        ordersPerPage
      ).map((i: IPosts) => {
        return <TableCellMain userId={i.userId} title={i.title} body={i.body} key={i.id} />;
      })}
    </GridContainer>
  );
};
