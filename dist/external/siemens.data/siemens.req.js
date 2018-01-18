"use strict";
exports.__esModule = true;
var xml2json = require("xml2js");
var rp = require("request-promise");
function siemensData() {
    var options = {
        uri: 'http://172.27.20.214/awp/bobo/get_data.db.xml',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false
    };
    var siemensResponse = rp(options)
        .then(function (response) {
        //change value to hex minus 12
        var offset = (response.length - 12).toString(16).length;
        return new Promise(function (resolve) {
            var resp = response.substring(offset, response.length - 6);
            xml2json.parseString(resp, { mergeAttrs: true, explicitArray: false, charkey: 'value' }, function (err, jsonResult) {
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
        console.log(jsonResult);
        console.log(jsonResult['Get_Data']['Machine_Speed']['type']);
        console.log(jsonResult['Get_Data']['Machine_Speed']['value']);
        console.log(jsonResult['Get_Data']['Machine_Speed']['desc']);
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
