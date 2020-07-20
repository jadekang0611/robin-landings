import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';
import * as ROUTES from './Routes';
// import StudentMain from './views/Students/StudentMain';
// import OutcomesMain from './views/Outcomes/OutcomesMain';
import Overview from './views/Students/Overview';
import RequestDemo from './views/Outcomes/components/RequestDemo';
import { Help, HelpResults } from './components/Help';
import OutcomesOverview from './views/Outcomes/components/OutcomesOverview';
import robinLogo from './assets/robin-logo.png';
import './Navigation.css';
import './App.css';
import HowWorks from './views/Students/HowWorks';
import AboutUs from './views/Company/AboutUs';

import './views/SubNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    <Router>
      <div>
        <div id='nav-container'>
          <ul className='nav-main'>
            <li className='nav-item'>
              <Link to='/students'>Students</Link>
            </li>
            <li className='nav-item'>
              <Link to='/outcomes'>Outcomes</Link>
            </li>
            <li className='nav-item'>Employers</li>
            <li className='nav-item'>
              <Link to='/about-us'>Company</Link>
            </li>
          </ul>

          <ul className='nav-main'>
            <li className='nav-item nav-sign-in'>Sign In</li>
          </ul>
        </div>

        <Switch>
          <Route exact path='/'>
            <Redirect to='/students' />
            <StudentPage />
          </Route>
          <Route path='/students'>
            <StudentPage />
          </Route>
          <Route path='/outcomes'>
            <OutcomesPage />
          </Route>
          <Route path='/about-us'>
            <AboutUsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function StudentPage() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div id='sub-nav-container'>
        <ul className='sub-nav-main'>
          <li className='logo-item'>
            <Link to='/students'>
              <img src={robinLogo} className='sub-nav-logo' alt='robin-logo' />
            </Link>
          </li>
        </ul>
        <ul className='sub-nav-main'>
          <li className='sub-nav-item'>
            <Link to={`${url}/overview`}>Overview</Link>
          </li>
          <li className='sub-nav-item'>
            <Link to={`${url}/how-it-works`}>How It Works</Link>
          </li>
          <li className='sub-nav-item'>
            <Link to={`${url}/help-center`}>Help Center</Link>
          </li>
          <li className='sign-up-button'>
            <Link to={`${url}/signup`}>Sign Up</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path={path}>
          <Overview />
        </Route>
        <Route path={`${path}/overview`}>
          <Overview />
        </Route>
        <Route path={`${path}/how-it-works`}>
          <HowWorks />
        </Route>
        <Route path={`${path}/help-center`}>
          <Help />
        </Route>
        <Route path={`${path}/help-results`}>
          <HelpResults />
        </Route>
        <Route path={`${path}/signup`}>
          
        </Route>
      </Switch>
    </div>
  );
}


function OutcomesPage() {
  let {path, url} = useRouteMatch();

  return (
    <div>
      <div id='sub-nav-container'>
        <ul className='sub-nav-main'>
          <li className='logo-item'>
            <Link to='/outcomes'>
              <img src={robinLogo} className='sub-nav-logo' alt='robin-logo' />
            </Link>
          </li>
        </ul>
        <ul className='sub-nav-main'>
          <li className='sub-nav-item'>
            <Link to={`${url}/overview`}>Overview</Link>
          </li>
          <li className='sub-nav-item'>
            <Link to={`${url}/help-center`}>Help Center</Link>
          </li>
          <li className='request-demo-button'>
            <Link to={`${url}/request-demo`}>Request for Demo</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path={path}>
          <OutcomesOverview />
        </Route>
        <Route path={`${path}/overview`}>
          <OutcomesOverview />
        </Route>
        <Route path={`${path}/help-center`}>
          <Help />
        </Route>
        <Route path={`${path}/help-results`}>
          <HelpResults />
        </Route>
        <Route path={`${path}/request-demo`}>
          <RequestDemo />
        </Route>
      </Switch>
    </div>
  );
}

function AboutUsPage() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div id='sub-nav-container'>
        <ul className='sub-nav-main'>
          <li className='logo-item'>
            <Link to='/outcomes'>
              <img src={robinLogo} className='sub-nav-logo' alt='robin-logo' />
            </Link>
          </li>
        </ul>
        <ul className='sub-nav-main'>
          <li className='sub-nav-item'>
            <Link to={`${url}`}>About Us</Link>
          </li>
          <li className='sub-nav-item'>
            <Link to={`${url}/blog`}>Blog</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path={path}>
          <AboutUs />
        </Route>
        <Route path={`${path}/about-us`}>
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}


// ///////////////////////////////
    // ORIGINAL
    // <div className='App'>
    //   <Router>
    //     <div id='nav-container'>
    //       <ul className='nav-main'>
    //         <li className='nav-item'>
    //           <Link to='/'>Students</Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/outcomes'>Outcomes</Link>
    //         </li>
    //         <li className='nav-item'>Employers</li>
    //       </ul>
    //       <ul className='nav-main'>
    //         <li className='nav-item nav-sign-in'>Sign In</li>
    //       </ul>
    //     </div>
    //     <Switch>
    //       <Route exact path={ROUTES.HOME} component={StudentMain} />
    //       <Route exact path={ROUTES.OUTCOMES} component={OutcomesMain} />
    //       <Route exact path={ROUTES.REQUEST_DEMO} component={RequestDemo} />
    //       <Route exact path={ROUTES.HELP_CENTER} component={Help} />
    //       <Route exact path={ROUTES.HELP_RESULTS} component={HelpResults} />
    //     </Switch>
    //   </Router>
    // </div>
//   );
// }

// export default App;
