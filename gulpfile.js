var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function(){
	return gulp.src(['./sass/**/*.scss', '!./sass/**/_*.scss'])
	.pipe(sass({style: 'expanded'}))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('./'));
});
 
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', function(event) {
		console.log('File ' + event.path + ' ' + event.type);
		gulp.run('sass');
	});
});
 
gulp.task('default', function () {
	gulp.run('watch');
});