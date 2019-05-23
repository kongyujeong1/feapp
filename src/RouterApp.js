import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Weather from './Component/Weather';
import Navigation from './Navigation';


const RouterApp = () => {
    return (
        <div> 
            <Navigation />
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route path = "/about" component = {About}/>
                <Route path = "/weather" component = {Weather}/>
            </Switch>
        </div>

    );

};

export default RouterApp;

