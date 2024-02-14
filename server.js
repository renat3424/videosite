const express=require("express");

const app=express();
const path=require("path");

const mongoose=require("mongoose");
const MongoDB="mongodb://127.0.0.1/my_videosite_db";
mongoose.connect(MongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));




const formidable = require("formidable");
const fileSystem = require("fs");
const bodyParser=require("body-parser");
const expressSession=require("express-session");
const { getVideoDurationInSeconds } = require('get-video-duration');



app.use(expressSession({
    "key": "user_id",
    "secret": "User secret Object Id",
    "resave": true,
    "saveUninitialized": true



}));
app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.json({
	limit: "10000mb"
}));
app.use(bodyParser.urlencoded({
	extended: true,
	limit: "10000mb",
	parameterLimit: 1000000
}));
const homeRouter=require('./routes/home');
const videoRouter=require('./routes/video');
const pageRouter=require('./routes/page');


app.listen(3000, function(){
    app.use("/", pageRouter);
     app.use("/", videoRouter);
app.use("/", homeRouter);  




})