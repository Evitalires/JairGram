var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
//Vamos a definir una tarea para gulp
//(nombre tarea, función) => Parsear sass
gulp.task('styles', function (){
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})
gulp.task('assets', function(){
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})
//Definiendo la tarea por defecto
gulp.task('default', ['styles', 'assets'])
