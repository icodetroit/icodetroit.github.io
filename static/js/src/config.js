requirejs.config({
	baseUrl: "/static",
	shim: {
		jquery: {
			exports: "jQuery"
		},
		"velocity": ["jquery"]
	},
	paths: {
		"jquery": "/static/bower_components/jquery/dist/jquery.min",
		"velocity": "/static/bower_components/velocity/velocity.min",
	}
});