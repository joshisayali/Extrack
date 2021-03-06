var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/Extrack';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    // we're connected!
    console.log("Connected correctly to server");    
});

var index = require('./routes/index');
var users = require('./routes/users');
var expenses = require('./routes/expenseRouter');
var expensePayments = require('./routes/expensePaymentRouter');
var expenseCategories = require('./routes/expenseCategoryRouter');
var expenseSubCategories = require('./routes/expenseSubCategoryRouter');
var expenseRepeats = require('./routes/expenseRepeatRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/expenses',expenses);
app.use('/expensepayments',expensePayments);
app.use('/expensecategories', expenseCategories);
app.use('/expensesubcategories', expenseSubCategories);
app.use('/expenserepeats',expenseRepeats);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
