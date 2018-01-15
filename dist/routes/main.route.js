"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*Exporting function which gets a start page
*/
function mainRoute(app) {
    app.get('/', function (req, res) {
        res.sendFile('index.html', {
            root: __dirname
        });
    });
}
exports.mainRoute = mainRoute;
