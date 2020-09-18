import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 12px;
          color: ${theme.text};
          margin: 0px;
          background-color: ${theme.background};
          font-family: 'Roboto', sans-serif;
        }
        a {
          text-decoration: underline;
          color: #64abf8;
        }

        ::-webkit-scrollbar {
          width: 7px;
          height: 4px;
        }
        ::-webkit-scrollbar-button {
          width: 0px;
          height: 0px;
        }
        ::-webkit-scrollbar-thumb {
          background: #f2a900;
          border: 0px none #ffffff;
          border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }
        ::-webkit-scrollbar-thumb:active {
          background: #000000;
        }
        ::-webkit-scrollbar-track {
          background: #666666;
          border: 0px none #ffffff;
          border-radius: 50px;
        }
        ::-webkit-scrollbar-track:hover {
          background: #666666;
        }
        ::-webkit-scrollbar-track:active {
          background: #333333;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}
    />
  );
}

export default GlobalStyles;
