const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');


const paths = {
  css:{
    src:'./src/essential/scss/*.scss',
    dest:'./src/essential/css'
  }
};

function compile_scss(){
  return gulp.src(paths.css.src)
  .pipe(sass().on('error',sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(paths.css.dest))
  .pipe(gulp.dest(paths.css.dest))
};

function watch_scss(){
  gulp.watch(paths.css.src,compile_scss);
};

exports.default = watch_scss;
