var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(){
    console.log("converting sass->css..")
    return gulp.src("app/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
});
