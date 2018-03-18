//подключение плагина gulp:
var gulp = require('gulp');
var browserSync = require('browser-sync').create(); //changed

gulp.task('default',['build', 'browser-sync'], function () {
    gulp.watch('site/**/*', ['build']);
});

gulp.task('build', function () {
    return gulp.src('site/**/*')
           .pipe(gulp.dest('../public'));
});

//new support task
gulp.task('refresh', function () {
    browserSync.reload();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../public"
        }
    });
});
