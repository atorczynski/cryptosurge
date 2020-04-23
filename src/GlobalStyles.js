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
          font-size: 14px;
          color: ${theme.text};
          margin: 0px;
          background-color: ${theme.background};
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
