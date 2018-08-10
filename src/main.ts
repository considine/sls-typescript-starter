/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package 
* 2018-08-10
*/
import * as express from 'express';
import * as cors from "cors";
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
import * as _ from "lodash";

app.use(cors({ origin: true }));

const error_handler = (res) => (e) => res.status(500).send({"message" : e.message}); 




export default app;