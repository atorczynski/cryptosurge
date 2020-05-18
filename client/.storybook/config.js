import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import GlobalStyles from '../src/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { primary } from '../src/theme/themes';

// add GlobalStyle for every story
const GlobalStyleDecorator = (storyFn) => (
  <ThemeProvider theme={primary}>
    <GlobalStyles />
    <Router>{storyFn()}</Router>
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
