import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import CoinPage from './pages/CoinPage';
import { ContentContainer } from './components/BodyHelpers';

function App() {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <NavBar />
      <ContentContainer>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path={'/coins/:id'} component={CoinPage} />
          </Switch>
        </Router>
      </ContentContainer>
    </ThemeProvider>
  );
}

export default App;
