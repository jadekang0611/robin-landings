// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import * as ROUTES from '../../Routes';
// import Overview from './Overview';
// import HowWorks from './HowWorks';
// import '../SubNav.css';
// import robinLogo from '../../assets/robin-logo.png';

// const StudentMain = () => {
//   return (
//     <div>
//       <Router>
//         <div>
//           <div id="sub-nav-container">
//             <ul className="sub-nav-main">
//               <li className="logo-item">
//                 <Link to="/">
//                   <img
//                     src={robinLogo}
//                     className="sub-nav-logo"
//                     alt="robin-logo"
//                   />
//                 </Link>
//               </li>
//             </ul>
//             <ul className="sub-nav-main">
//               <li className="sub-nav-item">
//                 <Link to="/">Overview</Link>
//               </li>
//               <li className="sub-nav-item">
//                 <Link to="/how-it-works">How it works</Link>
//               </li>
//               <li className="sub-nav-item">
//                 <Link to="/help-center">Help Center</Link>
//               </li>
//               <li className="sign-up-button">
//                 <Link to="/signup">Sign Up</Link>
//               </li>
//             </ul>
//           </div>
//           <Switch>
//             <Route exact path={ROUTES.HOME} component={Overview} />
//             <Route path={ROUTES.STUDENTS_HOW} component={HowWorks} />
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// };

// export default StudentMain;
