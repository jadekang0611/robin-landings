import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as ROUTES from '../../Routes';
import Overview from './Overview';
import RequestDemo from './RequestDemo';
import '../SubNav.css';
import robinLogo from '../../assets/robin-logo.png';

const OutcomesMain = () => {
    return (
        <div>
            <Router>
                <div>
                    <div id="sub-nav-container">
                        <ul className="sub-nav-main">
                            <li className="logo-item">
                                <Link to="/">
                                    <img
                                        src={robinLogo}
                                        className="sub-nav-logo"
                                        alt="robin-logo"
                                    />
                                </Link>
                            </li>
                        </ul>
                        <ul className="sub-nav-main">
                            <li className="sub-nav-item">
                                <Link to="/outcomes">Overview</Link>
                            </li>
                            <li className="sub-nav-item">
                                <Link to="/help-center">Help Center</Link>
                            </li>
                            <li className="request-demo-button">
                                <Link to="/request-demo">Request for Demo</Link>
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path={ROUTES.OUTCOMES} component={Overview} />
                        <Route exact path={ROUTES.REQUEST_DEMO} component={RequestDemo} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default OutcomesMain;
