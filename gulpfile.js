'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var fileInclude = require('gulp-file-include');
var rename = require('gulp-rename');

// Stamp the shared partials (head, header, footer) into each page and write the
// finished .html files to the repo root, where GitHub Pages serves them from.
gulp.task('html', function () {
    return gulp.src('./src/pages/*.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

// compile scss to css
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'styles.min'}))
        .pipe(gulp.dest('./css'));
});

// rebuild whenever a source file changes
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/**/*.html', gulp.series('html'));
});

// default task
gulp.task('default', gulp.series('html', 'sass'));
