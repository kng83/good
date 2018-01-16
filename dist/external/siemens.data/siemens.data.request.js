"use strict";
exports.__esModule = true;
var xml2json = require("xml2js");
var rp = require("request-promise");
function siemensData() {
    var options = {
        uri: 'http://172.27.20.214/awp/bobo/siemens_out.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false
    };
    var siemensResponse = rp(options)
        .then(function (response) {
        return new Promise(function (resolve) {
            var resp = response.substring(2, response.length - 6);
            xml2json.parseString(resp, function (err, jsonResult) {
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
        var SiemensModelArray = [];
        for (var key in singleResult) {
            var genderModel = {
                description: singleResult[key]['b'][0],
                value: singleResult[key]['b'][1]
            };
            SiemensModelArray.push(genderModel);
        }
        return SiemensModelArray;
    })["catch"](function (err) {
        // API call failed...
        console.log(err.message, 'ja cie dziękuje, Mariusz zobacz oni tu klina dali');
    });
    /*
    *Zwrocenie obietnicy z zawartosci zmiennych z gendera
    */
    return siemensResponse;
}
exports.siemensData = siemensData;
