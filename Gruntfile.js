(function(){
  var _ = require('lodash');

  module.exports = function(grunt){

    var config = {
      pkg:grunt.file.readJSON('package.json'),
      srcPath:{
        root:'./src/',
      },
      destPath:{
        root:'./public/',
      },
    };

    config = _.merge(config, {
      vueify: {
        components: {
          files: [
            {
              expand: true,
              src: '<%= srcPath.root %>/**/*.vue',
              dest: '<%= destPath.root %>',
              ext: '.vue.js'
            }
          ]
        }
      }
    });

    var PACKAGE_JSON = grunt.file.readJSON("package.json");
    grunt.config.init(config);

    // Load Grunt Plugins
    Object.keys(PACKAGE_JSON.devDependencies).map(function(name){
      if(name.match('grunt-')){
        grunt.loadNpmTasks(name);
      }
    });

    /*
     * Grunt Tasks
     */

    grunt.registerTask('default', ['css', 'js']);

    // CSS
    // ---------------------------------------------------
    grunt.registerTask('css', ['sass','copy']);

    // facility

    // JS
    // ---------------------------------------------------
    grunt.registerTask('js', ['requirejs', 'concat', 'uglify', 'copy',  'clean']);
    grunt.registerTask('js_debug', ['concat', 'uglify', 'copy', 'clean']);
  };
})();
