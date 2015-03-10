define(["jquery", "suspend"], function($) {

	/** Button init */
	// var button_delay = new Suspend()
	// button_delay
	// .on(
	// 	".ico-btn",
	// 	["mouseover", "mouseout"]
	// )
	// .callback(function(e) {
 //        var $el = $(this.element);
	// 	if ($el.hasClass("jelly-animation")) {
 //            $el.removeClass("jelly-animation").addClass("jelly-animation-out");
 //        }
 //        else if ($el.hasClass("jelly-animation-out")) {
 //            $el.removeClass("jelly-animation-out").addClass("jelly-animation");
 //        }
 //        else {
 //            $el.addClass("jelly-animation");
 //        }
	// }).start(200);
	$(".ico-btn").hover(

		/** handlerin */
        function(e) {
            var $el = $(this);
            if ($el.hasClass("jelly-animation")) {
                $el.removeClass("jelly-animation").addClass("jelly-animation-out");
            }
            else if ($el.hasClass("jelly-animation-out")) {
                $el.removeClass("jelly-animation-out").addClass("jelly-animation");
            }
            else {
                $el.addClass("jelly-animation");
            }
        }
	);
});