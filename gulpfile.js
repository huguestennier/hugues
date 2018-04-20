"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("scss", function() {
  return gulp
    .src("./assets/css/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./static/css"));
});

gulp.task("watch", function() {
  gulp.watch("./assets/css/**/*.scss", ["scss"]);
});

gulp.task("default", ["watch"]);
