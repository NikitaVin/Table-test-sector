import React, { FC, useState } from 'react';
import { IconWrapper, TableCellWrap } from './TableCell.styles';
import { SVGIcon } from '../../../../assets/icons/constansIcon';
import { Text } from '../../../../App.styles';

interface ITableCell {
  title: string;
  color?: string;
  backGroundColor?: string;
  isClickSortDate?: boolean;
  isClickSortQuantity?: boolean;
  isClickSortPrice?: boolean;
  onClickSortByBodyInc?: (i: boolean) => void;
  onClickSortByBodyDec?: (i: boolean) => void;
  onClickSortByIdInc?: (i: boolean) => void;
  onClickSortByIdDec?: (i: boolean) => void;
  onClickSortByTitleInc?: (i: boolean) => void;
  onClickSortByTitleDec?: (i: boolean) => void;
}

export const TableCell: FC<ITableCell> = ({
  title,
  color = '',
  backGroundColor,
  onClickSortByBodyInc,
  onClickSortByBodyDec,
  onClickSortByIdInc,
  onClickSortByIdDec,
  onClickSortByTitleInc,
  onClickSortByTitleDec,
}) => {
  const [increment, setIncrement] = useState(true);
  const [incID, setIncID] = useState(false);
  const [incTitle, setIncTitle] = useState(false);
  const [incBody, setIncBody] = useState(false);

  const hendlerSortBody = () => {
    if (incBody) {
      onClickSortByTitleInc?.(false);
      onClickSortByTitleDec?.(false);
      onClickSortByIdInc?.(false);
      onClickSortByIdDec?.(false);
      onClickSortByBodyDec?.(false);
      onClickSortByBodyInc?.(true);
    }
    if (!incBody) {
      onClickSortByTitleInc?.(false);
      onClickSortByTitleDec?.(false);
      onClickSortByIdInc?.(false);
      onClickSortByIdDec?.(false);
      onClickSortByBodyInc?.(false);
      onClickSortByBodyDec?.(true);
    }

    setIncBody(!incBody);
    setIncrement(!increment);
  };

  const hendlerSortId = () => {
    if (incID) {
      onClickSortByTitleInc?.(false);
      onClickSortByTitleDec?.(false);
      onClickSortByBodyDec?.(false);
      onClickSortByBodyInc?.(false);
      onClickSortByIdDec?.(false);
      onClickSortByIdInc?.(true);
    }
    if (!incID) {
      onClickSortByTitleInc?.(false);
      onClickSortByTitleDec?.(false);
      onClickSortByBodyDec?.(false);
      onClickSortByBodyInc?.(false);
      onClickSortByIdInc?.(false);
      onClickSortByIdDec?.(true);
    }
    setIncID(!incID);
    setIncrement(!increment);
  };

  const hendlerSortTitle = () => {
    if (incTitle) {
      onClickSortByBodyDec?.(false);
      onClickSortByBodyInc?.(false);
      onClickSortByIdInc?.(false);
      onClickSortByIdDec?.(false);
      onClickSortByTitleDec?.(false);
      onClickSortByTitleInc?.(true);
    }
    if (!incTitle) {
      onClickSortByBodyDec?.(false);
      onClickSortByBodyInc?.(false);
      onClickSortByIdInc?.(false);
      onClickSortByIdDec?.(false);
      onClickSortByTitleInc?.(false);
      onClickSortByTitleDec?.(true);
    }
    setIncTitle(!incTitle);
    setIncrement(!increment);
  };

  return (
    <TableCellWrap color={color} backGroundColor={backGroundColor}>
      <Text
        cursor="pointer"
        tableHead
        marginRight={30}
        onClick={
          title === 'ID'
            ? hendlerSortId
            : title === 'Заголовок'
            ? hendlerSortTitle
            : hendlerSortBody
        }
      >
        {title}
      </Text>
      {increment ? (
        <IconWrapper>
          <SVGIcon icons="arrowIcon" />
        </IconWrapper>
      ) : (
        <IconWrapper transform="rotate(180deg)">
          <SVGIcon icons="arrowIcon" />
        </IconWrapper>
      )}
    </TableCellWrap>
  );
};
