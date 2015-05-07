var gulp = require('gulp');
var	sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
  .pipe(sass())
  .on('error', notify.onError("Error: <%= error.message %>"))
  .on('error', handleError)
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(''))
  .pipe(minify({advanced: false}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
