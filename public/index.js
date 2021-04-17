console.log($(window).width(), "<= width");

// This handles the navbar hover effect
$("#navIndicator").css({
  width: $("#navbarLinkSelected").width() + 16,
  "margin-left": parseInt($("#navbarLinkSelected").css("margin-left")) - 8,
  left: $("#navbarLinkSelected").position().left,
});

// Handles when a navbar option is hovered on
$("nav a").hover(function () {
  var position = $(this).position();
  $("#navIndicator").css({
    width: $(this).width() + 16,
    "margin-left": parseInt($(this).css("margin-left")) - 8,
    left: position.left,
    transition: "all ease 0.6s",
  });
});

// handles when the mouse leaves navbar and want to return to selected section. notice we only use this when we leave "nav" and not "nav a"
$("nav").mouseleave(() => {
  $("#navIndicator").css({
    width: $("#navbarLinkSelected").width() + 16,
    "margin-left": parseInt($("#navbarLinkSelected").css("margin-left")) - 8,
    left: $("#navbarLinkSelected").position().left,
  });
});

// color theme button handlers
$("#colorThemeButton").click(() => {
  $("#tooltipContainer").css({
    padding: "1rem 0 2rem 1.5rem",
    width: "18rem",
  });
  setTimeout(() => {
    $("#tooltipHeader").append(
      "<span class='colorHeader'>CHOOSE COLOR <i id='tooltipExit' class='fas fa-times-circle' style='margin-left: 1rem'></i></span>"
    );
  }, 400);
});

// need to use onclick here because we are working with an appended element
$(document).on("click", "#tooltipExit", () => {
  $("#tooltipContainer").css({ padding: "0", width: "0" });
  $(".colorHeader").remove();
});

// Changing theme colors
let doc = document.documentElement;
$("#lightBlueColorTheme").click(() => {
  doc.style.setProperty("--navbar-color", "rgba(51, 109, 177, 1)");
  doc.style.setProperty("--theme-color", "rgb(74, 174, 255)");
  doc.style.setProperty("--theme-color-overlay", "rgba(51, 139, 255, .9)");

  $("#lightBlueColorTheme").addClass("selected");
  $("#greenColorTheme").removeClass("selected");
  $("#redColorTheme").removeClass("selected");
  $("#blueColorTheme").removeClass("selected");
});

// Changing to green color theme
$("#greenColorTheme").click(() => {
  doc.style.setProperty("--navbar-color", "green");
  doc.style.setProperty("--theme-color", "lightgreen");
  doc.style.setProperty("--theme-color-overlay", "rgba(144, 238, 144, .9)");

  $("#greenColorTheme").addClass("selected");
  $("#lightBlueColorTheme").removeClass("selected");
  $("#redColorTheme").removeClass("selected");
  $("#blueColorTheme").removeClass("selected");
});

//Changing to red color theme
$("#redColorTheme").click(() => {
  doc.style.setProperty("--navbar-color", "red");
  doc.style.setProperty("--theme-color", "rgb(255, 147, 147)");
  doc.style.setProperty("--theme-color-overlay", "rgb(255, 147, 147, .9)");

  $("#redColorTheme").addClass("selected");
  $("#lightBlueColorTheme").removeClass("selected");
  $("#greenColorTheme").removeClass("selected");
  $("#blueColorTheme").removeClass("selected");
});

//Changing to navy color theme
$("#blueColorTheme").click(() => {
  doc.style.setProperty("--navbar-color", "navy");
  doc.style.setProperty("--theme-color", "blue");
  doc.style.setProperty("--theme-color-overlay", "rgb(0, 0, 255, .8)");

  $("#blueColorTheme").addClass("selected");
  $("#lightBlueColorTheme").removeClass("selected");
  $("#greenColorTheme").removeClass("selected");
  $("#redColorTheme").removeClass("selected");
});

// testimonial owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dotsEach: true,
  dots: true,
  center: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  slideTransition: "ease-in",
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
  mouseDrag: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 40,
    },
    680: {
      items: 1,
      stagePadding: 90,
    },
    1125: {
      stagePadding: 0,
      items: 3,
    },
  },
});
