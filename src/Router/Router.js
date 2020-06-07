import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import About from '../Views/About';
import Authorization from '../Views/Authorization';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Authorization} />
                {/* <Route path="/home"  component={Home}/> */}
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/happiness-program" component={Happiness}/> */}
            </Switch>
        </Router>
    )
}

export default RouterComponent;

