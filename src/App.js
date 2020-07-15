import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as ROUTES from './Routes';
import StudentMain from './views/Students/StudentMain';
import OutcomesMain from './views/Outcomes/OutcomesMain';
import './Navigation.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div id="nav-container">
          <ul className="nav-main">
            <li className="nav-item">
              <Link to="/">Students</Link>
            </li>
            <li className="nav-item">
              <Link to="/outcomes">Outcomes</Link>
            </li>
            <li className="nav-item">Employers</li>
          </ul>
          <ul className="nav-main">
            <li className="nav-item nav-sign-in">Sign In</li>
          </ul>
        </div>
        <Switch>
          <Route path={ROUTES.HOME} component={StudentMain} />
          <Route path={ROUTES.OUTCOMES} component={OutcomesMain} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
