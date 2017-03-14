module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {

      options: {
        separator: ';'
      },
      dist: {
        src: ['public/**/*.js'],
        dest: 'public/dist/<%= pkg.name %>.js'
      }
          },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },

    uglify: {

      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
          },

    // eslint: {
    //   target: [

    //     'Gruntfile.js',
    //     'app/**/*.js',
    //     'public/**/*.js',
    //     'lib/**/*.js',
    //     './*.js',
    //     'spec/**/*.js'
    //           ]
    // },

    cssmin: {

      options: {
        keepSpecialComments: 0
      },
      dist: {
        files: {
          'public/bower_components/bootstrap/dist/css/*.css': 'public/style.css'
        }
      }
          },

    watch: {
      scripts: {
        files: [
          'public/**/*.js',
          'public/lib/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {

        command: 'git push heroku master',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true
        }
              }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('build', [

    'concat',
    'uglify',
    'cssmin'
      ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {

      grunt.task.run([ 'shell:prodServer' ]);
          } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [

    'build',
    'upload'
      ]);


};