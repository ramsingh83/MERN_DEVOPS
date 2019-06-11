/**
 * @description Main component.
 */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Create, Edit, List } from './components/Assets';
import Home from './components/Home';
import './app.scss';

const App = () => (
  <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3>Web UI Asset Store</h3>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create New</Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link">List Assets</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route exact path="/list" component={List} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);
export default App;
