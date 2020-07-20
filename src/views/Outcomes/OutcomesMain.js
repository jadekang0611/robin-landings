import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import * as ROUTES from '../../Routes';
import OutcomesOverview from './components/OutcomesOverview';
import RequestDemo from './components/RequestDemo';
import { Help, HelpResults } from '../../components';
import '../SubNav.css';
import robinLogo from '../../assets/robin-logo.png';
import Overview from '../Students/Overview';


const OutcomesMain = () => {
  let { path, url } = useRouteMatch();

    return (
      <div>
          <h2>outcomes main page</h2>
          <ul>
            <li>
              <Link to={`/outcomes`}>Overview</Link>
            </li>
            <li>
              <Link to={`/help-center`}>Help Center</Link>
            </li>
            <li>
              <Link to={`/request-demo`}>Request for Demo</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path={path} component={OutcomesOverview} />
            <Route exact path={ROUTES.HELP_CENTER} component={Help} />
            <Route exact path={ROUTES.HELP_RESULTS} component={HelpResults} />
            <Route exact path={ROUTES.REQUEST_DEMO} component={RequestDemo} />
          </Switch>
      </div>
    );
}




      // ORIGINAL
      // <div>
      //   <Router>
      //     <div>
      //       <div id='sub-nav-container'>
      //         <ul className='sub-nav-main'>
      //           <li className='logo-item'>
      //             <Link to='/outcomes'>
      //               <img
      //                 src={robinLogo}
      //                 className='sub-nav-logo'
      //                 alt='robin-logo'
      //               />
      //             </Link>
      //           </li>
      //         </ul>
      //         <ul className='sub-nav-main'>
      //           <li className='sub-nav-item'>
      //             <Link to='/outcomes'>Overview</Link>
      //           </li>
      //           <li className='sub-nav-item'>
      //             <Link to='/help-center'>Help Center</Link>
      //           </li>
      //           <li className='request-demo-button'>
      //             <Link to='/request-demo'>Request for Demo</Link>
      //           </li>
      //         </ul>
      //       </div>
      //       <Switch>
      //         <Route exact path={ROUTES.OUTCOMES} component={OutcomesOverview}/>
      //         <Route exact path={ROUTES.REQUEST_DEMO} component={RequestDemo} />
      //         <Route exact path={ROUTES.HELP_CENTER} component={Help} />
      //         <Route exact path={ROUTES.HELP_RESULTS} component={HelpResults} />
      //       </Switch>
      //     </div>
      //   </Router>
      // </div>
//     );
// };

export default OutcomesMain;
