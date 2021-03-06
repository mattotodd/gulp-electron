'use strict';
/* jshint node:true */

var electron = require('../');
var gulp = require('gulp');
var util = require('gulp-util');

var packageJson = require('./src/package.json');

process.NODE_ENV = 'test';

gulp.task('electron', function() {

    gulp.src("")
    .pipe(electron({
        src: './src',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v0.26.1',
        rebuild: false,
        packaging: true,
        asar: true,
        platforms: ['win32-ia32', 'darwin-x64']
    }))
    .pipe(gulp.dest(""));
});

gulp.task('default', ['electron']);

