"use strict";
exports.__esModule = true;
var http = require("http");
var xml2json = require("xml2js");
function getGenderData() {
    ;
    var GenderModelArray = [{ description: '', value: '' }];
    var options = {
        host: '172.27.22.203',
        path: '/dane3.xml'
    };
    var req = http.get(options, function (res) {
        var bodyChunks = [];
        var responeBody;
        var bodyToJson;
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        });
        res.on('end', function () {
            responeBody = Buffer.concat(bodyChunks).toString();
            bodyToJson = xml2json.parseString(responeBody, function (error, result) {
                if (error) {
                    throw error.name;
                }
                else {
                    var singleResult = result['table']['div'];
                    for (var key in singleResult) {
                        var genderModel = {
                            description: singleResult[key]['b'][0],
                            value: singleResult[key]['b'][1]
                        };
                        GenderModelArray.push(genderModel);
                    }
                }
            });
        });
    });
    var req2 = http.get(options);
}
exports.getGenderData = getGenderData;
