"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var main_route_1 = require("./routes/main.route");
var gender_route_1 = require("./routes/gender.route");
var siemens_route_1 = require("./routes/siemens.route");
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
main_route_1.mainRoute(app);
gender_route_1.genderRoute(app);
siemens_route_1.siemensRoute(app);
app.listen(3000);
