const gulp          = require('gulp');
const del           = require('del');
const webpack       = require('webpack-stream');
const webserver     = require('gulp-webserver');
const DIST          = 'dist';

//clean
gulp.task('clean', function() {
    console.log ('removing dist directory');
    return del([
        DIST
    ]);
});

//copy html files to dist
gulp.task('copy', function() {
    return gulp.src('src/*.html').pipe(gulp.dest(DIST));
});

//run
gulp.task('run', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

//build the dist directory
gulp.task('webpack', function() {
    return gulp.src('src/scripts/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/scripts/'));
});

//build
gulp.task('build', gulp.series('clean', gulp.parallel('webpack','copy'),'run'), function(done) {
    console.log('BUILD COMPLETE');
    done();

});

//watch
gulp.task('watch', function() {
    gulp.watch(['src/**/*.js',
        'src/*.html'],gulp.series('webpack','copy'));
});

// default task
gulp.task('default', gulp.parallel('build','watch'));
