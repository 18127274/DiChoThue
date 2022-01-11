var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const fetch = require("node-fetch");

const cors = require('cors');
// Import function exported by newly installed node modules.
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


/* https://sundara.herokuapp.com/

https://backendsundara.herokuapp.com */
/* 
https://localhost:44304
http://localhost:8888 
*/

app.use(cors({ origin: ["https://localhost:8081", 'https://localhost:8080', 'https://localhost:8888'], credentials: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:8081', 'https://localhost:8080', 'https://localhost:8888');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/font-awesome'));
/* app.use(express.static(__dirname + '/views')); */
// view engine setup
// const Handlebars = require("handlebars");

let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'customer',
    layoutsDir: __dirname + '/views/layouts',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});
app.engine('hbs', hbs.engine);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
/* console.log('PATH: ', path.join(__dirname,'views/layouts')) */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'font-awesome')));
/* app.use(express.static(path.join(__dirname, 'views'))); */

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  next();
});

const index_router = require('./routes/index');

app.use('/', index_router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//moi them



//
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
