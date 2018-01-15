"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mainRoute(app) {
    app.get('/', function (req, res) {
        res.sendFile('index.html', {
            root: __dirname
        });
    });
}
exports.mainRoute = mainRoute;
