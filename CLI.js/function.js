var fs = require("fs");
// var weather = require("weather-js");


var getLog = function () {

    fs.readFile("log.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else if (process.argv[2] === "admin") {
            console.log(data);
        }
    });
}

getLog();