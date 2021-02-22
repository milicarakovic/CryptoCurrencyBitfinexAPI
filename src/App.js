import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import React from 'react';
import ProfilePage from './components/ProfilePage';
import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const LogInContext = createContext();

const symbols = ['BTCUSD', 'BTCEUR', 'ETHUSD', 'ETHEUR', 'EOSUSD'];

function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    let tok = localStorage.getItem('token');
    if (tok) {
      setToken(true);
    }
  }, [token]);

  return (
    <>
      <LogInContext.Provider value={{ token, setToken }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage symbols={symbols} />
            </Route>
            <PrivateRoute
              path="/profile"
              token={token}
              component={ProfilePage}
            />
            <Route exact component={NotFound} />
          </Switch>
        </Router>
      </LogInContext.Provider>
    </>
  );
}

const PrivateRoute = ({ token, component, path, ...rest }) => {
  const routeComponent = (props) =>
    token === true ? (
      React.createElement(component, props)
    ) : (
      <>
        <Redirect to={{ pathname: '/' }} />
      </>
    );
  return <Route {...rest} render={routeComponent} />;
};

export default App;
