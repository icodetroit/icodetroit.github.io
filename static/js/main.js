requirejs.config({
	baseUrl: "/static",
	shim: {
		"bootstrap": ["jquery"]
	},
	paths: {
		"jquery": "bower_components/jquery/dist/jquery.min",
		"bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min"
	}
});

requirejs(["jquery", "bootstrap"], function($, bootstrap) {
	// $(".header-bar").affix();

});