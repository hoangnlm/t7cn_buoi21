/**
 * Created by Hoang on 12/11/16.
 */
import React, {Component} from "react"

class WeatherForm extends Component{
    changeCity(){
        this.props.changeCity(this.refs.txt.value)
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Input city name..." ref="txt"/>
                <br/>
                <button className="button expanded" onClick={this.changeCity.bind(this)}>Check weather</button>
            </div>
        )
    }
}

export default WeatherForm