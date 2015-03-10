var path = require( 'path' );

module.exports = function( grunt ) {

	grunt.initConfig({
	  	sass: {
	    	dist: {
	    		options: {
	    			source: "inline"
	    		},
	      		files: [{
			        expand: true,
			        cwd: 'static/sass',
			        src: ['index.scss', 'about.scss', 'blog.scss', 'contact.scss'],
			        dest: 'static/css/',
			        ext: '.css'
		        }]
	    	}
	  	},
	  	watch: {
			css: {
				files: 'static/sass/**/*.scss',
				tasks: ['sass']
			},
            jade: {
                files: 'jade/**/*.jade',
                tasks: ['jade']
            },
            // js: {
            // 	files: 'static/js/**/*.js',
            // 	tasks: ['browserify']
            // }
		},
		jade: {
            compile: {
    			options: {
                    pretty: true,
                    // debug: true,
    			},
                files: {
                    "./index.html": ["./jade/index.jade"],
                    "./about.html": ["./jade/about.jade"],
                    "./blog.html": ["./jade/blog.jade"],
                    "./contact.html": ["./jade/contact.jade"],
                }
            }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');

};
