const gulp = require('gulp');
const sass = require('gulp-sass');
const cfg = require('../package.json').config;

gulp.task('sass', function () {
  return gulp.src(cfg.src.sass + '**/*.{sass, scss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cfg.build.css) );
});
 
gulp.task('sass:watch', function () {
  gulp.watch(cfg.src.sass + '**/*.{sass, scss}', ['sass']);
});
