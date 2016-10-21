var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(rename({ basename: "vote-plugin" }))
    .pipe(gulp.dest(""));
});
