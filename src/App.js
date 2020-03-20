import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path={'/coins/:id'} component={CoinPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
