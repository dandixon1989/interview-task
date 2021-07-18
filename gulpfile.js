var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var include = require('gulp-include');

gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer( 'last 2 version' ) )
        .pipe(gulp.dest('./assets/css/'))
		.pipe(browserSync.stream());
});
gulp.task('template', function() {
    gulp.src('src/*.html')
        .pipe(include())
        .pipe(gulp.dest('./'));
});

//Watch task
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('assets/scss/**/**/*.scss',['styles']);
    gulp.watch('src/**/*.html',['template']);
});
