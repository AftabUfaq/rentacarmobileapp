var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./src/config/db')

var AuthRoute = require('./src/routes/AuthRoute');
var usersRouter = require('./src/routes/UserRoute');
var vechileRouter = require('./src/routes/VechileRoute');
var packageRouter = require('./src/routes/PackageRoute');
var bookingRouter = require('./src/routes/BookingRoute');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/vechiles', vechileRouter);
app.use('/packages', packageRouter);
app.use('/login', AuthRoute);
app.use('/bookings', bookingRouter);
// Connecting Database bookingRouter
connectDB();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);

});

module.exports = app;
