
  module.exports = function(grunt){

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		babel: {
            options: {
                presets: ['es2015']
            },
 
            js: {
                src:['public/static/js/all.js'],
                dest:'public/static/js/all.js'
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
			files:['Gruntfile.js','public/static/js/all.js'],
		},

		csslint:{
			options:{},
			files:['build/static/css/**/*.css'],
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
                    'public/static/js/index.js'
                    ,'public/static/js/route/*.js'
                    ,'public/static/js/filter/*.js'                   
                    ,'public/static/js/factory/*.js'
                    ,'public/static/js/ctrl/*.js'
                ],
      			dest: 'public/static/js/all.js',
    		},
  		},

        watch: {
            js: {
                files: ['public/static/js/*/*.js','Gruntfile.js','public/static/js/index.js'],
                tasks: ['less','concat:js'],
                // tasks: ['less','concat:js','babel:js'],
            },
            html: {
                files: ['temp/**/*.html'],
                tasks: ['less'],
            },
            css: {
                files: ['public/static/less/**/*.less','public/static/less/index.less'],
                tasks: ['less'],
            },
        },

        less: {
            main: {
                expand: true,
                cwd:'public/static/less',
                src: ['*.less','**/*.less'],
                dest: 'build/static/css',
                ext: '.css'
            },
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'public/',
                    src: ['**'],
                    dest: 'build/'
                },{
                    expand: true,
                    cwd: 'temp/',
                    src: ['**'],
                    dest: 'build'
                }]
            }
        },
        clean: ['build'], 
  		connect: {
            dev: {
                options: {
                    port: 8080,
                    base: ['public','temp','node_modules']
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
    grunt.loadNpmTasks('grunt-contrib-copy');
     grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-babel');

	// grunt.registerTask('default',['less','concat','babel:js','uglify','connect','watch']);
    // grunt.registerTask('default',['less','concat','uglify','connect','watch']);
    grunt.registerTask('default',['less','connect','concat','watch']);
    
    grunt.registerTask('test', ['jshint','copy','karma:continuous']);
    
    grunt.registerTask('package', ['clean','less','copy','uglify']);
    
  };




