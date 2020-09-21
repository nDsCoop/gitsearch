import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

    function App() {
      return (
        <AuthWrapper >
          <Router>
            <Switch>
              <PrivateRoute path="/" exact={true}>
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>
          </Router>
        </AuthWrapper>
       
      );
    }

export default App;
