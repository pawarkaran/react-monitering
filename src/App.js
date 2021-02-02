import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, HashRouter,  Redirect,  Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Home from './views/Home/Home';
import AdminRegister from './views/pages/register/AdminRegister';
import AdminLogin from './views/pages/login/AdminLogin';
import ForgotPassword from './views/Password/ForgotPassword';
import { ResetPassword } from './views/Password/ResetPassword';
import Emailverify from './views/Verify Email/Emailverify';
import AdminEmailverify from './views/Verify Email/AdminVerify';
import AdminLayout from './containers/AdminDashboard/AdminLayout'
// "react-bootstrap": "^1.4.0",
import { TheHeaderDropdown } from './containers';

import history from "./history"

const loading = (
  <div className="loader-wrap c-app c-default-layout text-center flex-row "style={{background: '#eaf1f8'}}>
  <div className="loader text-center flex-row">
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>
    <span className="loader-item"></span>

  </div>
 
</div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Start = React.lazy(() => import('./views/Home/Home'));

const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


function App() {

  // ------------------ Private Route -------------------------
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

// -----------------------------------------------------



// ------------------ Admin Route -------------------------
const checkAuthenticated1 = async () => {
  try {
    const res = await fetch("http://localhost:5000/authentication/verify/admin", {
      method: "POST",
      headers: { jwt_token_admin: localStorage.token_admin }
    });

    const parseRes = await res.json();

    parseRes === true ? setIsAuthenticated1(true) : setIsAuthenticated1(false);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  checkAuthenticated1();
}, []);

const [isAuthenticated1, setIsAuthenticated1] = useState(false);

const setAuth1 = boolean => {
  setIsAuthenticated1(boolean);
};

// -----------------------------------------------------

  

  // render() {
    return (
      <div>
       


     
       <HashRouter >
          <React.Suspense fallback={loading}>
            <Switch>
            <Route exact path="/" name="DevOps" render={props =>   ( <Home {...props} setAuth={setAuth} /> ) } />
              <Route exact path="/login" name="Login Page" render={props => !isAuthenticated ? ( <Login {...props} setAuth={setAuth} /> ) : ( <Redirect to="/dashboard" /> ) } />
              <Route exact path="/register" name="Register Page" render={props => !isAuthenticated ? ( <Register {...props} setAuth={setAuth} /> ) : ( <Redirect to="/dashboard" /> ) } />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/dashboard" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />

              <Route exact path="/issues/details/:id" name="Home" render={props =>  ( <TheLayout {...props}/>)  } />

              <Route exact path="/issues" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />
              <Route exact path="/tasks" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />
              <Route exact path="/alertlog" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props} setAuth={setAuth} /> ) :( <Redirect to="/login" /> ) } />
              <Route exact path="/analytics" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />
              <Route exact path="/teams" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />
              <Route exact path="/call" name="Home" render={props => isAuthenticated ? ( <TheLayout {...props}  setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />

              <Route exact path="/" name="Home" render={props => !isAuthenticated ? ( <TheHeaderDropdown {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login" /> ) } />


              <Route exact path="/activate/:token" name="" render={props => <Emailverify {...props}/>} />
              <Route exact path="/password/forgotpassword" name="" render={props => <ForgotPassword {...props}/>} />
              <Route exact path="/password/resetpassword/:token" name="" render={props => <ResetPassword {...props}/>} />
              <Route exact path="/admin/admin-register" name="" render={props => !isAuthenticated1 ? ( <AdminRegister {...props} setAuth1={setAuth1} /> ) : ( <Redirect to="/admin/dashboard" /> ) } />
              <Route exact path="/admin/admin-login" name="" render={props => !isAuthenticated1 ?  ( <AdminLogin {...props} setAuth1={setAuth1} /> ) : ( <Redirect to="/admin/dashboard" /> ) } />
              <Route exact path="/admin/adminverify/:token" name="" render={props => <AdminEmailverify {...props}/>} />
              <Route exact path="/admin/dashboard" name="Admin" render={props => isAuthenticated1 ? ( <AdminLayout {...props} setAuth1={setAuth1} /> ) : ( <Redirect to="/admin/admin-login" /> ) } />
              <Route exact path="/users" name="Home" render={props => isAuthenticated1 ? ( <AdminLayout {...props} setAuth1={setAuth1} /> ) : ( <Redirect to="/admin/admin-login" /> ) } />
              
              <Route exact path="/users/details/:id" name="Home" render={props => isAuthenticated1 ? ( <AdminLayout {...props} setAuth1={setAuth1} /> ) : ( <Redirect to="/admin/admin-login" /> ) } />
              <Route component={Page404} />


            </Switch>
          </React.Suspense>
      </HashRouter>
      </div>
    );
  }
// }

export default App;
