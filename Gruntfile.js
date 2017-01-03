
  module.exports = function(grunt){

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		babel: {
            options: {
                presets: ['es2015']
            },
 
            js: {
                src:['static/js/all.js'],
                dest:'static/js/all.js'
            },
        },
		uglify:{
			options:{
				stripBanners:true,
				banner: '/*! <%= pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
			js:{
				files:{
					// 'static/js/index.min.js':'static/js/index.js',
				}
			},
		},

		jshint:{
			files:['Gruntfile.js','static/js/all.js'],
		},

		csslint:{
			options:{},
			files:['static/css/**/*.css'],
		},
		
        concat: {
            options: {
                process: function(src, filepath) {
                    if (filepath.substr(filepath.length - 2) === 'js') {
                        return '// Source: ' + filepath + '\n' +
                            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    } else {
                        return src;
                    }
                }
            },
    		js: {
      			src: [
                    'static/js/index.js'
                    ,'static/js/route/*.js'
                    ,'static/js/filter/*.js'                   
                    ,'static/js/factory/*.js'
                    ,'static/js/ctrl/*.js'
                ],
      			dest: 'static/js/all.js',
    		},
  		},

        watch: {
            js: {
                files: ['static/js/*/*.js','Gruntfile.js','static/js/index.js'],
                tasks: ['less','concat:js','babel:js'],
            },
            html: {
                files: ['temp/**/*.html'],
                tasks: ['less'],
            },
            css: {
                files: ['static/less/**/*.less'],
                tasks: ['less'],
            },
        },

        less: {
            main: {
                 src: ['static/less/common/login.less'],
                 dest: 'static/css/common/login.css', 
            }
        },

  		connect: {
            dev: {
                options: {
                    port: 8080,
                    base: ['static', 'temp', 'build']
                }
            },
            // prod: {
            //     options: {
            //         port: 8081,
            //         base: ['build'],
            //         keepalive: true
            //     }
            // }
        },
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-babel');

	// grunt.registerTask('default',['less','concat','babel:js','uglify','connect','watch']);
    grunt.registerTask('default',['less','concat','uglify','connect','watch']);
    
  };




