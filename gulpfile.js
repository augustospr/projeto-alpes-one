const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
var reload = browserSync.reload;


function compilaSass() {
  return gulp
    .src('./scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream()); // atualiza os arquivos, sem que seja necessário um reload do browser
}


function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

function watch() {
  gulp.watch('./scss/*.scss', compilaSass);
  gulp.watch("./scss/*.scss").on("change", reload);
  gulp.watch(['*.html']).on('change', browserSync.reload);
  gulp.watch(['*.php']).on('change', browserSync.reload);
}

gulp.task('sass', compilaSass);
gulp.task('browser-sync', browser);
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));