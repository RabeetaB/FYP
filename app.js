var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('config');
var cors = require('cors');
var passport = require('passport');
var authenticate = require('./authenticate');
var indexRouter = require('./app_server/routes/index');
var authSuperAdminRouter = require('./app_server/routes/superAdmin/authSuperAdmin');
var dashboardSuperAdminRouter = require('./app_server/routes/superAdmin/dashboardSuperAdmin');
var authNetRouter = require('./app_server/routes/payment/authnetPayment')
var stripeRouter = require('./app_server/routes/payment/stripePayment')
var reviewsRouter = require('./app_server/routes/reviews/reviews')
var ratingsRouter = require('./app_server/routes/ratings/ratings')
var criticalReviewsRouter = require('./app_server/routes/reviews/criticalReviews')
var positiveReviewsRouter = require('./app_server/routes/reviews/positiveReviews')

var app = express();
const dB = config.get('mongoURI');
const connection = mongoose.connect(dB, { useNewUrlParser: true, useUnifiedTopology: true });
connection.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(passport.initialize());
app.use(passport.session()); 


// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/superadmin/auth', authSuperAdminRouter);
app.use('/api/superadmin', dashboardSuperAdminRouter);
app.use('/api/payment/authnet', authNetRouter);
app.use('/api/payment/stripe', stripeRouter);
app.use('/api/review', reviewsRouter);
app.use('/api/ratings', ratingsRouter);
app.use('/api/criticalreviews', criticalReviewsRouter);
app.use('/api/positivereviews', positiveReviewsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
