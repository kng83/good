var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var nodemon = require('nodemon');
var browserSync = require('browser-sync').create();

/*
*Runing typescript compiler
*/
gulp.task("typescript", function () {
    return tsProject.src().pipe(
          tsProject()).js.pipe(gulp.dest("dist")
        );       

});

/*
*Watching typescript files
*/
gulp.task('watch', ['typescript'], function() {
  gulp.watch('src/**/*.ts', ['typescript']);
  gulp.watch('src/**/*.html',['copy'])
  
});

/*
*copy some files for example .html
*/
gulp.task('copy', function() { 
  return gulp.src('./src/*.html').pipe(gulp.dest('./dist')); 
});

/* 
*Task for nodemon using once
*/
gulp.task("nodemon", function(cb) {
  var options = {
    watch: ["dist/"],
    script: "dist/app.js",
    ignore: ["src/","node_modules/"]
  }
  nodemon(options);
  nodemon.once("start",cb);
});

/*
*Restart server after typescipt code get compiled
*/
gulp.task('join',['watch','nodemon'],function(){

});

/*
*Starting browser sync
*/
gulp.task('bs', ['join'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["dist/**.*"],
        browser: "chrome",
        port: 5000,
  });

});
  


