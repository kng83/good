"use strict";
exports.__esModule = true;
function genderRoute(app) {
    app.get('/api/gender-data', function (req, res) {
        res.send({
            name: 'Gender',
            data: 'some data'
        });
    });
}
exports.genderRoute = genderRoute;
