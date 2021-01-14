import React from 'react';
import './styles/GlobalStyles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/app' component={Layout} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
