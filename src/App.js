import React from 'react';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
