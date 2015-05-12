var gulp         = require('gulp')
    paths        = require('../../config').paths,
    handleErrors = require('../utils/handleErrors'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

gulp.task('sass', function() {
  gulp.src(paths.scss + '**/*.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths : [
        require('lego').includePath
      ]
    }))
    .pipe(gulp.dest(paths.built.css))
    .on('error', handleErrors)
    .pipe(reload({stream:true}));
});