module.exports = function(config) {
    config.set({

        browsers: ['PhantomJS'],

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'app/*.js',
            'test/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'app/*.js': ['browserify'],
            'test/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        }
    });
};