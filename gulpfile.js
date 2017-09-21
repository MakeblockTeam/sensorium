var gulp = require("gulp");  
var istanbul = require('gulp-babel-istanbul');
var mocha = require('gulp-mocha');

gulp.task('pre-test', function(){
      return gulp.src(['src/**/*.js'])
      .pipe(istanbul())
      .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function(){
      return gulp.src(['test/interface/sendData.test.js'])
      .pipe(mocha({compilers:'js:babel-core/register',require:'babel-polyfill'}))
      .pipe(istanbul.writeReports())
      .once('end', function(){
            process.exit();
      });
});