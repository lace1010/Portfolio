console.log("connected");

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
    padding: "1rem 1.5rem 2rem 1.5rem",
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

  $("#lightBlueColorTheme").addClass("selected");
  $("#greenColorTheme").removeClass("selected");
  $("#redColorTheme").removeClass("selected");
  $("#blueColorTheme").removeClass("selected");
});

// Changing to green color theme
$("#greenColorTheme").click(() => {
  doc.style.setProperty("--navbar-color", "green");
  doc.style.setProperty("--theme-color", "lightgreen");

  $("#greenColorTheme").addClass("selected");
  $("#lightBlueColorTheme").removeClass("selected");
  $("#redColorTheme").removeClass("selected");
  $("#blueColorTheme").removeClass("selected");
});

//Changing to red color theme
$("#redColorTheme").click(() => {
  document.documentElement.style.setProperty("--navbar-color", "red");
  document.documentElement.style.setProperty(
    "--theme-color",
    "rgb(255, 147, 147)"
  );

  $("#redColorTheme").addClass("selected");
  $("#lightBlueColorTheme").removeClass("selected");
  $("#greenColorTheme").removeClass("selected");
  $("#blueColorTheme").removeClass("selected");
});

//Changing to navy color theme
$("#blueColorTheme").click(() => {
  document.documentElement.style.setProperty("--navbar-color", "navy");
  document.documentElement.style.setProperty("--theme-color", "blue");

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

console.log($(window).width(), "<= width");
