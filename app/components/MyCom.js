/**
 * Created by Hoang on 12/17/16.
 */
import React, {Component} from "react"

export default class MyCom extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            inner: 0
        }
    }

    add(){
        this.state.inner = this.state.inner + Number(this.props.inner)
        this.setState(this.state)
    }

    test(){
        return 12345
    }

    methodExpression(){
        console.log(`This includes ${this.test()}`)
    }

    render(){
        return (
            <div>
                <button className="button" onClick={this.add.bind(this)}>Add {this.state.inner}</button>
                <button className="button" onClick={this.methodExpression.bind(this)}>Method expression</button>
            </div>
        )
    }
}