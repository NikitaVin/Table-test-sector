import { FC, useEffect, useCallback } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Table } from '../../components/Table/Table';
import { getAsyncPostsByParams } from '../../redux/slices/posts';
import { useAppDispatch } from '../../redux/store';

interface IMainContent {
  setCurrentPage: (pageNumber: number) => void;
  currentPage: number;
  ordersPerPage: number;
}

export const MainContent: FC<IMainContent> = ({ ordersPerPage, currentPage, setCurrentPage }) => {
  const appDispatch = useAppDispatch();

  const paginateForward = useCallback(() => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, setCurrentPage]);

  const paginateBack = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
    appDispatch(getAsyncPostsByParams());
  }, [appDispatch]);

  return (
    <div>
      <Table ordersPerPage={ordersPerPage} currentPage={currentPage} />
      <Footer
        currentPage={currentPage}
        ordersPerPage={ordersPerPage}
        paginateForward={paginateForward}
        paginateBack={paginateBack}
      />
    </div>
  );
};
