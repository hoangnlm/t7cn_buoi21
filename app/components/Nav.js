/**
 * Created by Hoang on 12/17/16.
 */
import React, {Component} from "react"
import {Link, IndexLink} from "react-router"

export default class Nav extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li><IndexLink
                            to="/"
                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold"
                                , color: "green"
                            }}>Get Weather</IndexLink></li>
                        <li><Link
                            to="/about"
                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold"
                                , color: "red"
                            }}>About</Link></li>
                        <li><Link
                            to="/example"
                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold"
                                , color: "blue"
                            }}>Example</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Search"/></li>
                        <li><button type="button" className="button">Search</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
