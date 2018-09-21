import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import routes from './routes.js';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import LoadingBar from 'react-redux-loading-bar';

import NoMatch from './pages/no-match';
import Header from './components/header';
import Footer from './components/footer';

// Our single Styled Component definition
const AppContainer = styled.div`
  background-color: #fff;
  overflow: hidden;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
        <LoadingBar updateTime={100} maxProgress={95} progressIncrease={20} style={{ backgroundColor: '#ffa687', height: '61px' }} />/>
        <Switch>
          {routes.map(({ path, exact, component: C}) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props}/>
              )}
            />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
        <Footer/>
      </AppContainer>
    )
  }
}
export default hot(module)(App);
