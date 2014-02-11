module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    useminPrepare: {
      html: ['example/index.html']
    },
    usemin: {
      html: ['example/index.html']
    },
    copy: {
      main: {
        src: 'example/template.html',
        dest: 'example/index.html'
      },
    },
    concat: {
      '.tmp/concat/angular-transform.min.js': ['src/**/*.js']
    },
    uglify: {
      options: {
        compress: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      'dist/angular-transform.min.js': ['.tmp/concat/angular-transform.min.js']
    },
    clean: [".tmp"]
  });

  grunt.registerTask('build', ['copy', 'useminPrepare', 'concat', 'uglify', 'usemin', 'clean']);
};
