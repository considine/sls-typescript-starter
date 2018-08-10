/**
* @author Jack Considine <jackconsidine3@gmail.com>
* @package 
* 2018-08-10
*/
import * as dotenv from "dotenv";
dotenv.config();

import app from './main';
// The Firebase Admin SDK to access the Firebase Realtime Database.

app.listen("8888", ()=> {
    console.log("Listening");
    return true;
})