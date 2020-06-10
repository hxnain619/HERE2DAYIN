import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Authorization from '../Views/Authorization';
import Home from '../Views/Home';
import About from '../Views/About';
import Happiness from '../Views/HappinessProgram';
import ExperienceStep1 from '../Views/Experience/Experience1';
import ExperienceStep2 from '../Views/Experience/Experience2';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Authorization} />
                <Route path="/home"  component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/happiness-program" component={Happiness}/>
                <Route path="/ExperienceStep1" component={ExperienceStep1} />
                <Route path="/ExperienceStep2" component={ExperienceStep2} />
            </Switch>
        </Router>
    )
}

export default RouterComponent;

