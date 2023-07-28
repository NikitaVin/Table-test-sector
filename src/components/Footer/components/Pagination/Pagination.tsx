import React, { FC } from 'react';
import { ListLi, ListUl, PageBox, Wrapper } from './Paginateion.styles';
import { useSelector } from 'react-redux';
import { colors } from '../../../../styles/colors';
import { postssSelector } from '../../../../redux/slices/posts';
import { selectorSearch } from '../../../../redux/slices/search';

interface IPagination {
  isLightTheme?: boolean;
  ordersPerPage: number;
  currentPage?: number;
}

export const Pagination: FC<IPagination> = ({ ordersPerPage, currentPage }) => {
  const { items } = useSelector(postssSelector);
  const { searchValue } = useSelector(selectorSearch);

  const pageNumbers = [];

  for (
    let i = 1;
    i <=
    Math.ceil(
      items.filter(
        (i) =>
          i.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.body.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.userId === Number(searchValue)
      ).length / ordersPerPage
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <ListUl>
        {pageNumbers.map((number) => (
          <ListLi
            key={number}
            color={currentPage === number ? `${colors.currentPage}` : `${colors.textAndTable}`}
          >
            <PageBox>{number}</PageBox>
          </ListLi>
        ))}
      </ListUl>
    </Wrapper>
  );
};
