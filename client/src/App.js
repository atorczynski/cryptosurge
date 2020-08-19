import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { primary } from './theme/themes';
import { ThemeProvider } from 'emotion-theming';
import AppBar from './components/AppBar';
import Main from './pages/Main';
import CoinPage from './pages/CoinPage';
import { ContentContainer } from './components/BodyHelpers';

import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyles />
      <AppBar />
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
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
