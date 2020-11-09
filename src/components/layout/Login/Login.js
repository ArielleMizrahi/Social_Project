import React, { Component, Fragment } from 'react';
import logo from '../../Icons/LoginLogo/loginlogoimg.png';
import './login.css';
import LoginCard from './LoginCard/LoginCard';

export class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid login">
          <div className="row">
            <div className="col-sm">
              <img src={logo} alt="logologin"></img>
            </div>
            {/* <div className="card text-right">
              <h1 className="card-header">ברוכים הבאים </h1>
              <div className="card-body">פה נירשום כמה דברים שיראו בכניסה</div>
            </div> */}
            <div className="col-sm">
              <LoginCard />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
