"use strict";
exports.__esModule = true;
var gender_data_request_1 = require("../external/gender_data/gender.data.request");
function genderRoute(app) {
    app.get('/api/gender-data', function (req, res) {
        var genderData = gender_data_request_1.getGenderData();
        genderData.then(function (data) {
            res.send({ data: data });
        });
    });
}
exports.genderRoute = genderRoute;
