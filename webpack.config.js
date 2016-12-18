/**
 * Created by Hoang on 12/10/16.
 */
var webpack = require("webpack")
module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js'
        , 'script!foundation-sites/dist/foundation.min.js'
        , "./app/App.js"
    ]
    , externals: {
        jquery: 'jQuery'
    }
    , plugins: [
        new webpack.ProvidePlugin({"$": "jquery"})
    ]
    , output: {
        path: __dirname + "/public"
        , filename: "bundle.js"
    }
    , resolve: {
        root: __dirname
        , alias: {
            About: "app/components/About.js"
            , Example: "app/components/Example.js"
            , Main: "app/components/Main.js"
            , Nav: "app/components/Nav.js"
            , Weather: "app/components/Weather.js"
            , WeatherForm: "app/components/WeatherForm.js"
            , WeatherMessage: "app/components/WeatherMessage.js"
        }
    }
    , module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-3', 'react']
            }
        }]
    }
}