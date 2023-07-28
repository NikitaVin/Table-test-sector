import { css } from '@emotion/react';

export const fontStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    src: local('Nunito'), url(../assets/fonts/Roboto-Medium.ttf) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    src: local('Nunito'), url(../assets/fonts/Roboto-Regular.ttf) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    src: local('Nunito'), url(../assets/fonts/Roboto-BoldItalick.ttf) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
