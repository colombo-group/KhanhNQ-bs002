// Include gulp
var gulp = require('gulp');

var sass = require('gulp-sass');
//Main Task
gulp.task('main',function(){
	return gulp.src('sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});
