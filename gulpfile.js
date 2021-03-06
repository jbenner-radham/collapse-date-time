'use strict';

let gulp   = require('gulp');
let jscs   = require('gulp-jscs');
let jshint = require('gulp-jshint');
let micro  = require('gulp-micro');

gulp.task('js', () => {
    return gulp.src('lib/*.js')
        .pipe(micro({limit: 1000}))
        .pipe(jscs())
        .pipe(jscs.reporter('fail'))
        .pipe(jshint())
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['js']);
