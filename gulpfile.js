var gulp       = require('gulp');
var sass       = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var uglify     = require('gulp-uglify');
var cssnano    = require('gulp-cssnano');
var rename     = require('gulp-rename');

gulp.task('sass', function() {
  return gulp.src('src/tags.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefix({browsers: ['last 5 versions']}))
    .pipe(gulp.dest('dist'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
  return gulp.src('src/tags.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', function() {
  gulp.watch(['src/*.scss'], ['sass']);
  gulp.watch(['src/*.js'], ['js']);
});