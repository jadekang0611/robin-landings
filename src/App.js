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
import About from './views/Company/About';

import './views/SubNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    //Top Nav//
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
            <li className='nav-item'>
              <Link to='/employers'>Employers</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us'>Company</Link>
            </li>
          </ul>

          <ul className='nav-main'>
            <li className='nav-item nav-sign-in'>
              <Link to='/sign-in'>Sign In</Link>
            </li>
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
          <Route path='/employers'>
            <EmployersPage />
          </Route>
          <Route path='/about-us'>
            <AboutUsPage />
          </Route>
          <Route path='/sign-in'>
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/////////////////////////////
//Student section Sub Nav//
////////////////////////////

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
          {/* Enter the component name */}
        </Route>

      </Switch>
    </div>
  );
}


/////////////////////////////
//Outcomes section Sub Nav//
/////////////////////////////

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


/////////////////////////////
//Employers section Sub Nav//
/////////////////////////////

function EmployersPage() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div id='sub-nav-container'>
        <ul className='sub-nav-main'>
          <li className='logo-item'>
            <Link to='/employers'>
              <img src={robinLogo} className='sub-nav-logo' alt='robin-logo' />
            </Link>
          </li>
        </ul>
        <ul className='sub-nav-main'>
          <li className='sub-nav-item'>
            <Link to={`${url}`}>Overview</Link>
          </li>
          {/* <li className='sub-nav-item'>
            <Link to={`${url}/search-candidates`}>Search Candidates</Link>
          </li> */}
        </ul>
      </div>

      <Switch>
        <Route exact path={path}>
          {/* Enter the component name */}
        </Route>
        {/* <Route path={`${path}/search-candidates`}>
          <About />
        </Route> */}
      </Switch>
    </div>
  );
}


/////////////////////////////
//About Us section Sub Nav//
/////////////////////////////

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
          {/* <li className='sub-nav-item'>
            <Link to={`${url}/blog`}>Blog</Link>
          </li> */}
        </ul>
      </div>

      <Switch>
        <Route exact path={path}>
          <About />
        </Route>
        <Route path={`${path}/about-us`}>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

/////////////////////////////
//Sign In Page section Sub Nav//
/////////////////////////////

function SignInPage() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div id='sub-nav-container'>
        <ul className='sub-nav-main'>
          <li className='logo-item'>
            <Link to='/sign-in'>
              <img src={robinLogo} className='sub-nav-logo' alt='robin-logo' />
            </Link>
          </li>
        </ul>
        <ul className='sub-nav-main'>
          <li className='sub-nav-item'>
            Don't have an account? <Link to={`/sign-up`}>Sign up</Link>
          </li>
          {/* <li className='sub-nav-item'>
            <Link to={`${url}/search-candidates`}>Search Candidates</Link>
          </li> */}
        </ul>
      </div>

      <Switch>
        {/* <Route exact path={path}>
          <About />
        </Route>
        <Route path={`${path}/search-candidates`}>
          <About />
        </Route> */}
      </Switch>
    </div>
  );
}

/////////////////////////////
//Sign Up Page section Sub Nav//
/////////////////////////////

// function SignUpPage() {
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <div id='sub-nav-container'>
//         <ul className='sub-nav-main'>
//           <li className='logo-item'>
//             <Link to='/sign-up'>
//               <img src={robinLogo} className='sub-nav-logo' alt='robin-logo' />
//             </Link>
//           </li>
//         </ul>
//         <ul className='sub-nav-main'>
//           <li className='sub-nav-item'>
//             Have have an account? <Link to={`/sign-in`}>Sign in</Link>
//           </li>
//           {/* <li className='sub-nav-item'>
//             <Link to={`${url}/search-candidates`}>Search Candidates</Link>
//           </li> */}
//         </ul>
//       </div>

//       <Switch>
//         {/* <Route exact path={path}>
//           <About />
//         </Route>
//         <Route path={`${path}/search-candidates`}>
//           <About />
//         </Route> */}
//       </Switch>
//     </div>
//   );
// }

