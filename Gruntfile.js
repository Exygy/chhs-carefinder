'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

  // Define our Pattern Library and Application Assets paths
  applicationAssetsPath: 'src',
  patternLibraryPath: '../exygy-patterns-standards',

  // Delete the old toolkit.css
  clean: {
    css: ['<%= applicationAssetsPath %>/toolkit.css']
  },

  //Copy the latest compiled toolkit.css file from the pattern library into our app
  copy: {
    main: {
      files: [
        {
          src: '<%= patternLibraryPath %>/dist/assets/toolkit/styles/toolkit.css',
          dest: '<%= applicationAssetsPath %>/styles/toolkit.css'
        },
        {
          expand: true,
          cwd: '<%= patternLibraryPath %>/dist/assets/toolkit/images/',
          src: ['**'],
          dest: '<%= applicationAssetsPath %>/images/',
        }
      ],
    },
  },

  //Make any string replacements that are needed when transfering assets to app.
  replace: {
    dist: {
      options: {
        patterns: [
          {
            match: 'http://fonts.googleapis.com',
            replacement: '//fonts.googleapis.com'
          }
        ],
        usePrefix: false
      },
      files: [
        {
          expand: true, flatten: true,
          src: ['<%= applicationAssetsPath %>/styles/toolkit.css'],
          dest: '<%= applicationAssetsPath %>/styles/'
        }
      ]
    }
  },

});

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');

  // register task
  grunt.registerTask('default', [
    'clean',
    'copy',
    'replace'
  ]);

  grunt.registerTask('deploy', [
    'clean',
    'copy',
    'replace'
  ]);

};
