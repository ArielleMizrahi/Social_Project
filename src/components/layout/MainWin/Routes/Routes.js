import React from "react";
import WelcomPage from "../../MainWin/WelcomPage/WelcomPage";
import commiteesWin from "../../CommiteesWin/commiteesWin";
import {Route} from "react-router-dom";
import chairmanItems from "../../ChairmanItems/ChairmanItems";
import secreturywin from "../../SecretaryWin/SecreturyWin";
import NewMeeting from "../../xpertesy/NewMeeting/NewMeeting";
import MyMeetings from "../../xpertesy/MyMeetings/MyMeetings";
import {PersonalPage} from "../../PersonalPage/PersonalPage";
import {MainCommitteesPage} from "../../MainCommitteesPage/MainCommitteesPage";
import Login from "../../Login/Login"

const routesData =
    [
        {component: Login, path: "/Social_Project/", exact: true},
        {component: WelcomPage, path: "/Social_Project/MainWin"},
        {component: chairmanItems, path: "/Social_Project/chairmanItems/:item"},
        {component: secreturywin, path: "/Social_Project/secreturywin"},
        {component: NewMeeting, path: "/Social_Project/newmeeting"},
        {component: MyMeetings, path: "/Social_Project/mymeetings"},
        {component: PersonalPage, path: "/Social_Project/personal"},
        {component: MainCommitteesPage, path: "/Social_Project/committees", exact: true},
        {component: commiteesWin, path: "/Social_Project/committees/:type"},
    ]

const Routes = () => routesData.map(route => <Route key={route.path} {...route}/>);

export default Routes;
