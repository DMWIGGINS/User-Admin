
// need npm weather package to get weather data
var weather = require("weather-js");

var Getweather = function (name, location) {

    this.name = name,
        this.location = location,
        this.myWeather = function () {

            weather.find({
                search: "Anchorage, AK",
                degreeType: "F"
            }, function (error, result) {

                if (error) {
                    console.log(error);
                } else {

                    console.log(JSON.stringify(result, null, 2));
                }

            });
        }
};

module.exports = Getweather;
