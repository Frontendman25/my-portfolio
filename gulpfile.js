var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    cleancss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass')

gulp.task('styles', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 3 versions'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(cleancss())
    .pipe(notify({message: 'Styles task complete'}))
    .pipe(gulp.dest('css/'))
})

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series('styles'));
})