import React, { FC, useMemo, useState } from 'react';
import { Input } from '../../../Input/Input';
import { HeaderSearchContainer, HeaderInputContainer } from '../../Header.styles';
import { InputArea } from '../../../Input/Input.styles';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../../redux/slices/search';
import debounce from 'lodash.debounce';

interface IHeaderSearch {
  toFirstPage: () => void;
}

export const HeaderSearch: FC<IHeaderSearch> = ({ toFirstPage }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const updateSearchValue = useMemo(
    () =>
      debounce((str) => {
        dispatch(setSearchValue(str));
        toFirstPage();
      }, 250),
    [dispatch, toFirstPage]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <HeaderSearchContainer>
      <HeaderInputContainer>
        <Input marginLeft={8} marginRight={8} svgForInput="searchIcon">
          <InputArea value={value} placeholder="Поиск" onChange={handleSearch} />
        </Input>
      </HeaderInputContainer>
    </HeaderSearchContainer>
  );
};
