//подключение плагина gulp:
var gulp = require('gulp'); 
var webserver = require('gulp-webserver-io'); //require('gulp-serverlivereload')

//Задача умолчанию, перед которой выполнится задача ['webserver']:
gulp.task('default',['webserver'], function () {
    gulp.watch('site/**/*', ['build']);
});

//Задача 'build':
gulp.task('build', function () {
    return gulp.src('site/**/*')
           .pipe(gulp.dest('../public'));
});

//Новая задача 'webserver', перед которой выполнится задача ['build']:
gulp.task('webserver', ['build'], function() {
    gulp.src('../public')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});