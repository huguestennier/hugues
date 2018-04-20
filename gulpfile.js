"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("./assets/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./static/css"));
});

gulp.task("watch", function() {
  gulp.watch("./assets/**/*.scss", ["sass"]);
});

gulp.task("default", ["watch"]);
