var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req, res, next){
  console.log(req.url, '저도 미들웨어입니다');
  next(); //미들웨어에서 next(); 를 해주는 것은 아주 중요함
          //next() 다음 미들웨어로
          //next('route') 다음 라우터로
          //next(error) 에러 핸들러로
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //urlencoded는 주소 형식으로 데이터를 보내는 방식이다. false라면 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석하고, true면 qs 모듈을 사용해 쿼리스트링을 해석한다
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
