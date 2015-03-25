define(["jquery", "bootstrap", "velocity"], function($, bootstrap, velocity) {

  $(".subnav").on("click", ".ico-btn", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    // Toggle button states
    $(".subnav .ico-btn.active").removeClass("active");
    $(this).addClass("active");

    var href = $(this).attr("href");
    if (!$(href).length) return;

    // Fade out currently-shown page
    $(".content .content-section.active").velocity({opacity: 0}, function(elements) {
      $(elements).removeClass("active");

      $(href).velocity({opacity: 1}, function(elements) {
        $(elements).addClass("active");
      })
    });
  });
  
  return {
  }  
});



