var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes/index');
var client = require('./routes/client');
var coc = require('./routes/coc');
var disabilities = require('./routes/disabilities');
var employmentEducation = require('./routes/employmentEducation');
var enrollment = require('./routes/enrollment');
var exit = require('./routes/exit');
var funder = require('./routes/funder');
var healthAndDv = require('./routes/healthAndDv');
var incomeBenefits = require('./routes/incomeBenefits');
var services = require('./routes/services');
var visitHistory = require('./routes/visitHistory');

var app = express();
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/client', client);
app.use('/coc', coc);
app.use('/disabilities', disabilities);
app.use('/employmentEducation', employmentEducation);
app.use('/enrollment', enrollment);
app.use('/exit', exit);
app.use('/funder', funder);
app.use('/healthAndDv', healthAndDv);
app.use('/incomeBenefits', incomeBenefits);
app.use('/services', services);
app.use('/visitHistory', visitHistory);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
