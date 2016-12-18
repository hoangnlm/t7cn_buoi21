/**
 * Created by Hoang on 12/10/16.
 */
import React, {Component} from "react"
import {render} from "react-dom"
import Main from "./components/Main"
import Weather from "./components/Weather"
import About from "./components/About"
import Example from "./components/Example"
import {Router, Route, IndexRoute, hashHistory} from "react-router"
// import Weather from "Weather"  // resolve cua webpack.config.js

require('!style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}/>
            <Route path="example" component={Example}/>
        </Route>
    </Router>
    , document.getElementById("root"))