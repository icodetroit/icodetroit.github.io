define(["jquery", "bootstrap", "velocity"], function($, bootstrap, velocity) {

  $(".subnav").on("click", ".ico-btn", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var href = $(this).attr("href");
    if (!$(href).length) return;

    // Fade out currently-shown page
    $(".content .content-section.active").removeClass("active");
    $(href).addClass("active");

    // Toggle button states
    $(".subnav .ico-btn.active").removeClass("active");
    $(this).addClass("active");

  });
  
  return {
  }  
});



