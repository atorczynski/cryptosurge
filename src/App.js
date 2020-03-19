import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import NavBar from './components/NavBar';
import Main from './pages/Main';

function App() {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/ss33'>
            <Main />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
