module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    appDir: 'src',
                    name: 'main',
                    mainConfigFile: 'src/js/main.js',
                    dir: 'dist'
                }
            }
        }
    });

    grunt.registerTask('default', ['requirejs']);

    grunt.loadNpmTasks('grunt-contrib-requirejs');
};