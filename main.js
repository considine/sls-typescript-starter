/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package
* 2018-02-25
*/
var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());





app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app;
