import React from 'react';
import { cast } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';

function App() {
  return (
    <ThemeProvider theme={cast}>
      <div>
        <h1>Hi</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
