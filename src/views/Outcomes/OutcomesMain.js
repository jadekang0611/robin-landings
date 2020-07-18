import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as ROUTES from '../../Routes';
import OutcomesOverview from './components/OutcomesOverview';
import RequestDemo from './components/RequestDemo';
import { Help } from '../../components';
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
                                <Link to="/outcomes">
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
                        <Route exact path={ROUTES.OUTCOMES} component={OutcomesOverview} />
                        <Route exact path={ROUTES.REQUEST_DEMO} component={RequestDemo} />
                        <Route exact path={ROUTES.HELP_CENTER} component={Help} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default OutcomesMain;
