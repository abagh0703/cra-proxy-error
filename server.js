//import series from 'async/series'; //specification: https://caolan.github.io/async/docs.html#series

//server.js
'use strict';

//import dependencies
const async = require('async');
const express = require('express');
const debug = require('debug')('http');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cors = require('cors'); NOTE: even with CORS, it doesn't work. I get the same error.
const fs = require('fs');
const fileUpload = require('express-fileupload');

//create instances
const app = express();
const router = express.Router();

//set our port to either a predetermined port number if you have set
//it up, or 3001
const port = process.env.PORT || 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors()); NOTE: even with CORS, it doesn't work. I get the same error.
app.use(fileUpload());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'API Initialized!'});
});

app.use('/api', router);

app.get('/something', function (req, res) {
 res.send("hello");
 });

// catch 404 and fgorward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
// const host = process.env.HOST || '0.0.0.0';
//starts the server and listens for requests
app.listen(port, function () {
    debug(`api running on port ${port}`);
});