/**
 * Created by Hoang on 12/11/16.
 */
import React, {Component} from "react"

class WeatherMessage extends Component{
    render(){
        return (
            <p className="lead">
                {this.props.city === "not found" ? "City not found!" : `${this.props.city} is now ${this.props.temp} Celsius degree(s)`}
            </p>
        )
    }
}

export default WeatherMessage