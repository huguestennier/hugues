"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require("gulp-babel");
const rollup = require('gulp-better-rollup');
const uglify = require('gulp-uglify-es').default;
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');

var production = false;

function js() {
  gulp.src('./assets/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({
      plugins: [babel()]
    }, {
      format: 'cjs',
    }))
    .pipe(sourcemaps.write())
    .pipe(production ? uglify() : util.noop())
    .pipe(gulp.dest('./static/js'))
};

function css() {
  gulp.src("./assets/scss/theme.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(sourcemaps.write())
    .pipe(production ? cleanCSS() : util.noop())
    .pipe(gulp.dest("./static/css"));
};

function watch() {
  gulp.watch("./assets/scss/**/*.scss", ["css"]);
  gulp.watch("./assets/js/**/*.js", ["js"]);
};

function build() {
  production = true;
  js();
  css();
};

exports.js = js;
exports.css = css;
exports.watch = watch;
exports.build = build;

gulp.task("default", ["watch"]);
