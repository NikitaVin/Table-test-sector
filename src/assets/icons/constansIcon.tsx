import { FC, useCallback } from 'react';

interface IArrowIcon {
  icons?: string;
  onClickSortTitle?: () => void;
}

export const SVGIcon: FC<IArrowIcon> = ({ icons = '', onClickSortTitle }) => {
  const iconFoo = useCallback(() => {
    switch (icons) {
      case 'arrowIcon':
        return (
          <svg
            onClick={onClickSortTitle}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
          >
            <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC" />
            <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white" />
          </svg>
        );

      case 'searchIcon':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <g clipPath="url(#clip0_16_77)">
              <path
                d="M20.7353 19.4958L14.7101 13.4663C15.8979 12.0418 16.6124 10.2213 16.6124 8.23301C16.6124 3.69689 12.8896 0.00860596 8.31048 0.00860596C3.73132 0.00860596 0 3.70119 0 8.23731C0 12.7734 3.72272 16.4617 8.30187 16.4617C10.2472 16.4617 12.0375 15.7946 13.4577 14.68L19.5045 20.7267C19.8574 21.0796 20.3824 21.0796 20.7353 20.7267C21.0882 20.3738 21.0882 19.8487 20.7353 19.4958ZM1.76452 8.23731C1.76452 4.67383 4.69966 1.77743 8.30187 1.77743C11.9041 1.77743 14.8392 4.67383 14.8392 8.23731C14.8392 11.8008 11.9041 14.6972 8.30187 14.6972C4.69966 14.6972 1.76452 11.7965 1.76452 8.23731Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_77">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
    }
  }, [icons, onClickSortTitle]);
  return <>{iconFoo()}</>;
};
