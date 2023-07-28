import React, { FC } from 'react';
import { HeaderContainer } from './Header.styles';
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';

interface IHeader {
  toFirstPage: () => void;
}

export const Header: FC<IHeader> = ({ toFirstPage }) => {
  return (
    <HeaderContainer>
      <HeaderSearch toFirstPage={toFirstPage} />
    </HeaderContainer>
  );
};
