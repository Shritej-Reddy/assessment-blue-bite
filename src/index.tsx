// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Root = () => (
  <div>
    <Link to="/page-one">Page One</Link><br />
    <Link to="/page-two">Page Two</Link><br />
    <Link to="/page-three">Page Three</Link>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Root} />
        <Route path="/:id" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
