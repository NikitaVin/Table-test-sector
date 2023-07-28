import React, { FC } from 'react';
import { Pagination } from './components/Pagination/Pagination';
import { FooterMain, FooterWrapper } from './Footer.styles';
import { Button } from '../Button/Button';

interface IFooter {
  ordersPerPage: number;
  currentPage?: number;
  paginateForward: () => void;
  paginateBack: () => void;
}

export const Footer: FC<IFooter> = ({
  ordersPerPage,
  paginateForward,
  paginateBack,
  currentPage,
}) => {
  return (
    <FooterMain>
      <FooterWrapper>
        <Button text="Назад" color="footer" onClick={paginateBack} />
        <Pagination ordersPerPage={ordersPerPage} currentPage={currentPage} />
        <Button text="Вперед" color="footer" onClick={paginateForward} />
      </FooterWrapper>
    </FooterMain>
  );
};
