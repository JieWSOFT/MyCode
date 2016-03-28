/**
 * Created by wj on 2016/3/28.
 */
module.exports = function (grunt) {
    var config = {
        jshint: {
            options: {
                ignores: ['html/*.js', 'js/jquery.min.js', 'js/knockout-3.3.0.js', 'js/requirejs-2.1.20.min.js']
            },
            check: {
                files: {
                    src: ['gruntfile.js', 'js/*.js']
                }
            }
        },
        sass: {
            options: {
                style: "compressed",
                uodate: false,
                noCache: true
            },
            files: {
                expand: true,
                cwd: 'sass/',
                src: ['*.sass'],
                dest: 'jsmin&css/',
                ext: '.css'
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer-core')({browsers: 'Android >3, iOS >=7, ChromeAndroid >=3, last 2 Chrome versions, last 2 Safari versions'}),
                    require('csswring')
                ]
            },
            dist: {
                src: 'html/*.css'
            }
        },
        watch: {
            css: {
                files: ['sass/*.sass'],
                tasks: ['sass', 'newer:postcss'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            'module-js': {
                files: ['js/*.js'],
                tasks: ['jshint', 'requirejs:debug'],
                options: {
                    livereload: true
                }
            }
        },
        requirejs: {
            debug: grunt.file.readJSON('require.json'),
            release: grunt.file.readJSON('require.json')
        }
    };
    config.requirejs.debug.options.uglify2 = {
        "output": {
            "beautify": true,
            "comments": true,
            "ascii_only": false
        },
        "compress": false,
        "mangle": false
    };
    grunt.initConfig(config);
    //// 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //// 加载包含 "watch" 任务的插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    //// 加载包含 "jshint" 任务的插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //
    //// 加载包含 "sass" 任务的插件
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-newer');


    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['jshint', 'requirejs:release', 'sass', 'newer:postcss']);
    grunt.registerTask('default-dev', ['jshint', 'requirejs:debug', 'sass', 'newer:postcss']);

};