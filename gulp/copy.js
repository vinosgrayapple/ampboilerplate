const gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src('src/**/*')
		.pipe(gulp.dest('build/'))
});