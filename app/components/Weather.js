/**
 * Created by Hoang on 12/11/16.
 */
import React, {Component} from "react"
import WeatherForm from "./WeatherForm"
// import WeatherForm from "WeatherForm"
import WeatherMessage from "./WeatherMessage"
import axios from "axios"

const API_URL = "http://api.openweathermap.org/data/2.5/weather?appid=738276e241c657d1bebd5dda7cc7e10d&units=metric&q="

class Weather extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            city: undefined
            , temp: undefined
            , isLoading: false
        }
    }

    getWeatherFromApi(city) {
        return axios.get(API_URL + city)
            .then(res => {
                // console.log(res)
                return res.data
            })
            .catch(e => console.log("loi: ", e))
    }

    changeCity(city) {
        // console.log(city)
        this.state.isLoading = true
        this.setState(this.state)

        this.getWeatherFromApi(city)
            .then(data => {
                // console.log(list)
                this.state.isLoading = false
                if (data) {
                    this.state.city = data.name
                    this.state.temp = data.main.temp
                    this.setState(this.state)
                } else {
                    this.state.city = "not found"
                    this.setState(this.state)
                }
            })
            // .catch(console.log)
    }

    render() {
        return (
            <div className="small-12 large-6 large-centered">
                <h1 className="text-center subheader page-title">Get Weather</h1>
                <WeatherForm changeCity={this.changeCity.bind(this)}/>
                {this.state.isLoading ? <p className="lead">Wait a moment...</p> : this.state.city ? <WeatherMessage city={this.state.city} temp={this.state.temp}/> : ""}
            </div>
        )
    }
}

export default Weather