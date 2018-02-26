/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package
* 2018-02-25
*/
const serverless = require('serverless-http');
var app  = require("./main");

module.exports.handler = serverless(app);
