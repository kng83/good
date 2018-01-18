"use strict";
exports.__esModule = true;
var siemens_req_1 = require("../external/siemens.data/siemens.req");
function siemensRoute(app) {
    app.get('/api/siemens-data', function (req, res) {
        siemens_req_1.siemensData().then(function (data) {
            res.send({ data: data });
        });
    });
}
exports.siemensRoute = siemensRoute;
