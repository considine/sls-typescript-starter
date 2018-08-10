/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package 
* 2018-08-10
*/

import app from './main';


const serverless = require('serverless-http');

module.exports.handler = serverless(app);