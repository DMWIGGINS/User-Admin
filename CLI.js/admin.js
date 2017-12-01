// need file package to run program
var fs = require("fs");


// Admin function to get data from log.txt and console log it
var Getlog = function () {

    fs.readFile("log.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log(data);
        }
    });
};
Getlog();

// Admin function to add data to log.txt regarding user and query information
var Userlog = function (name, location, date) {

    this.name = name,
        this.location = location,
        this.date = date,
        this.currentUserlog = function () {
            fs.appendFile("log.txt", "Name: " + name + "Location: " + location + "Date: ", function (error) {
                if (error) {
                    return console.log(error);
                } else {
                    console.log("File Updated");

                }
            });
        }
};

Userlog();

module.exports = Userlog;
module.exports = Getlog;
