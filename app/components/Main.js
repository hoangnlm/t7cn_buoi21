/**
 * Created by Hoang on 12/17/16.
 */
import React, {Component} from "react"
import Nav from "./Nav"
import MyCom from "./MyCom"

export default class Main extends Component {
    render(){
        return (
            <div>
                <Nav/>
                {this.props.children}
                <MyCom inner="1"/>
            </div>
        )
    }
}
