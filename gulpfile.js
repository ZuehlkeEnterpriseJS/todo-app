var gulp = require('gulp');
var webserver = require('gulp-webserver');
var karma = require('karma').server;

var serverConfig = {
    host: 'localhost',
    port: '8001',
    open: true,
    livereload: true,
    directoryListing: false
};

var paths = {
  root: './'
};

gulp.task('webserver', function () {
    gulp.src(paths.root)
        .pipe(webserver(serverConfig));
});

/**
 * Runs our unit tests with karma
 * */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        autoWatch: false
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 * */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        autoWatch: true
    }, done);
});

gulp.task('default', ['webserver', 'tdd']);