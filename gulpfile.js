"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var babel = require("gulp-babel");

gulp.task("scss", function() {
  return gulp
    .src("./assets/css/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./static/css"));
});

gulp.task("babel", function() {
  return gulp
    .src("./assets/js/app.js")
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(gulp.dest("./static/js"));
});

gulp.task("watch", function() {
  gulp.watch("./assets/css/**/*.scss", ["scss"]);
  gulp.watch("./assets/js/app.js", ["babel"]);
});

gulp.task("default", ["watch"]);
