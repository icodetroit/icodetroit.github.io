var path = require( 'path' );

module.exports = function( grunt ) {

	grunt.initConfig({
	  	sass: {
	    	dist: {
	      		files: [{
			        expand: true,
			        cwd: 'static/sass',
			        src: ['main.scss'],
			        dest: 'static/css/',
			        ext: '.css'
		        }]
	    	}
	  	},
	  	watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
