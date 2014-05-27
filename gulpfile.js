var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rimraf = require('gulp-rimraf'),
    watch = require('gulp-watch');

gulp.task('styles-clean', function() {
    return gulp.src('build/styles/**/*.css')
        .pipe(rimraf());
});

gulp.task('styles', ['styles-clean'], function() {
    return gulp.src(['assets/sass/*.scss'])
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat('combined.css'))
        .pipe(gulp.dest('assets/styles'));
});

gulp.task('watch', function() {
    watch({glob: 'assets/sass/*.scss'}, function() {
        gulp.start('styles');
    });
});

gulp.task('default', ['styles']);