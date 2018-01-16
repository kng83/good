"use strict";
exports.__esModule = true;
var xml2json = require("xml2js");
var rp = require("request-promise");
function getGenderData() {
    var options = {
        uri: 'http://172.27.22.203/dane3.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false // Automatically parses the JSON string in the response
    };
    var genderResponse = rp(options)
        .then(function (response) {
        return new Promise(function (resolve) {
            xml2json.parseString(response, function (err, jsonResult) {
                if (err) {
                    throw err;
                }
                else {
                    resolve(jsonResult);
                }
            });
        });
    })
        .then(function (jsonResult) {
        var singleResult = jsonResult['table']['div'];
        var GenderModelArray = [];
        for (var key in singleResult) {
            var genderModel = {
                description: singleResult[key]['b'][0],
                value: singleResult[key]['b'][1]
            };
            GenderModelArray.push(genderModel);
        }
        return GenderModelArray;
    })["catch"](function (err) {
        // API call failed...
        console.log(err.message);
    });
    /*
    *Zwrocenie obietnicy z zawartosci zmiennych z gendera
    */
    return genderResponse;
}
exports.getGenderData = getGenderData;
