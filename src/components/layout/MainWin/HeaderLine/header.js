import React from 'react';
import avatar from '../../../Icons/Avatars/avatar.png';
import './header.css';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar/navbar";

const Header = () => {
  return (
      <header>
          <div className="container-fluid">
              <div className="row">
                  <div className="col align-self-end">
                      <Link to="/Social_Project/personal">
                          <img className="avatar" alt="avatar" src={avatar}/>
                      </Link>
                  </div>
                  <div className="col text-right">
                      <Link to="/Social_Project/MainWin">
                          <h1 id="title">מועצת הורים</h1>
                      </Link>
                  </div>
              </div>
          </div>
          <NavBar/>
      </header>
  );
};

export default Header;
