import React from 'react';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';

function App() {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <div>
        <h1>Hi</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
