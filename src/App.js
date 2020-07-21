import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';
import * as ROUTES from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
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




export default function App() {
  return (
    //Top Nav//
    <Router>
      <div>
        {/* MOBILE NAV BAR */}
        <Navbar bg="light" expand="md" className="mobile-nav">
          <Navbar.Brand as={Link} to='/'>
            <img src={robinLogo} className='mobile-nav-logo' alt='robin-logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Students" id="students-nav-dropdown">
                <NavDropdown.Item as={Link} to='/students/overview'>Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/students/how-it-works'>How It Works</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/students/help-center'>Help Center</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/students/signup'>Sign Up</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Outcomes" id="outcomes-nav-dropdown">
                <NavDropdown.Item as={Link} to='/outcomes/overview'>Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/outcomes/help-center'>Help Center</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/outcomes/request-demo'>Request for Demo</NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown title="Employers" id="employer-nav-dropdown">
                <NavDropdown.Item as={Link} to='/employers/overview'>Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/employers/search-candidates'>Search Candidates</NavDropdown.Item>
              </NavDropdown> */}
              <NavDropdown title="Company" id="company-nav-dropdown">
                <NavDropdown.Item as={Link} to='/about-us'>About Us</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to='/about-us/blog'>Blog</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        

        {/* DESKTOP NAV BAR */}
        <div id='desktop-nav-container'>
          <ul className='desktop-nav-main'>
            <li className='desktop-nav-item'>
              <Link to='/students'>Students</Link>
            </li>
            <li className='desktop-nav-item'>
              <Link to='/outcomes'>Outcomes</Link>
            </li>
            {/* <li className='desktop-nav-item'>
              <Link to='/employers'>Employers</Link>
            </li> */}
            <li className='desktop-nav-item'>
              <Link to='/about-us'>Company</Link>
            </li>
          </ul>

          <ul className='desktop-nav-main'>
            <li className='desktop-nav-item desktop-nav-sign-in'>
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

