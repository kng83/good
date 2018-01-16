"use strict";
exports.__esModule = true;
var siemens_data_request_1 = require("../external/siemens.data/siemens.data.request");
function siemensRoute(app) {
    app.get('/api/siemens-data', function (req, res) {
        siemens_data_request_1.siemensData().then(function (data) {
            res.send({ data: data });
        });
    });
}
exports.siemensRoute = siemensRoute;
