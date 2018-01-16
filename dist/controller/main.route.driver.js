"use strict";
exports.__esModule = true;
var mainRouteDriver;
(function (mainRouteDriver) {
    /*
    * Send response of index.html
    */
    mainRouteDriver.indexPage = function (req, res) {
        res.sendFile('index.html', {
            root: __dirname
        });
    };
})(mainRouteDriver = exports.mainRouteDriver || (exports.mainRouteDriver = {}));
