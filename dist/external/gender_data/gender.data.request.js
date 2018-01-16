"use strict";
exports.__esModule = true;
var rp = require("request-promise");
function getGenderData2() {
    ;
    var options = {
        uri: 'http://172.27.22.203/dane3.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (response) {
        // console.log(response);
    })["catch"](function (err) {
        // API call failed...
    });
}
exports.getGenderData2 = getGenderData2;
