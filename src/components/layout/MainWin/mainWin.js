import React from 'react';
import Header from './HeaderLine/header';
import NavBar from '../MainWin/NavBar/navbar';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Routes from './Routes/Routes';


function MainWin() {
    return (
        <Router>
            <Header/>
            <main>
                <Switch>
                    <Routes/>
                </Switch>
            </main>
        </Router>
    );
}

export default MainWin;
