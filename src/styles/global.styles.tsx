import { colors } from './colors';
import { fontStyle } from './font.styles';
import { css, Global } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${fontStyle}

        html {
          height: 100%;
        }

        html,
        body {
          position: relative;
          font-family: 'Roboto', sans-serif;
          overflow-x: hidden;
          width: 100%;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border: 0;
          background: ${colors.white};
          color: ${colors.black};
        }

        span {
          background-color: inherit;
        }

        svg {
          background-color: inherit;
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
};
