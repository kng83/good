"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var main_route_1 = require("./routes/main.route");
var gender_route_1 = require("./routes/gender.route");
var siemens_data_request_1 = require("./external/siemens.data/siemens.data.request");
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
main_route_1.mainRoute(app);
gender_route_1.genderRoute(app);
var sdata = siemens_data_request_1.siemensData();
sdata.then(function (response) {
    console.log(response);
});
app.listen(3000);
