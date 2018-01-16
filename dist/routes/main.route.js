"use strict";
exports.__esModule = true;
var main_route_driver_1 = require("../controller/main.route.driver");
/*
*Exporting function which gets a start page
*/
function mainRoute(app) {
    app.get('/', main_route_driver_1.mainRouteDriver.indexPage);
}
exports.mainRoute = mainRoute;
