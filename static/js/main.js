requirejs.config({
	baseUrl: "/static",
	paths: {
		"skrollr": "bower_components/skrollr/dist/skrollr.min",
		"jquery": "bower_components/jquery/dist/jquery.min"
	}
});

requirejs(["jquery", "skrollr"], function($, skrollr){
	var s = skrollr.init();

});