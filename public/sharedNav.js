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

// HANDLE NAVBAR WHEN CHANGING TO DROPDOWN MENU FOR PHONE

let dropDown = false;
$("#dropDownButton").click(() => {
  if (!dropDown) {
    $(".nav-link-list-dropdown").css({
      height: "110px",
      padding: "10px",
      "margin-top": "-10px",
    });
    dropDown = true;
  } else {
    $(".nav-link-list-dropdown").css({
      height: "0",
      padding: "0",
      "margin-top": "0",
    });
    dropDown = false;
  }
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
// Changing to colorTheme1
$("#colorTheme1").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(53, 73, 83)");
  doc.style.setProperty("--theme-color", "rgb(86, 119, 135)");
  doc.style.setProperty("--theme-color-overlay", "rgba(86, 119, 135, .9)");

  $("#colorTheme1").addClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme2
$("#colorTheme2").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(77, 72, 83)");
  doc.style.setProperty("--theme-color", "rgb(117, 110, 126)");
  doc.style.setProperty("--theme-color-overlay", "rgba(117, 110, 126, .9)");

  $("#colorTheme2").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme3
$("#colorTheme3").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(71, 70, 114)");
  doc.style.setProperty("--theme-color", "rgb(111, 109, 178)");
  doc.style.setProperty("--theme-color-overlay", "rgba(111, 109, 178, .9)");

  $("#colorTheme3").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme4
$("#colorTheme4").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(0, 128, 128)");
  doc.style.setProperty("--theme-color", "rgb(4, 196, 196)");
  doc.style.setProperty("--theme-color-overlay", "rgba(4, 196, 196, .9)");

  $("#colorTheme4").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme5
$("#colorTheme5").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(102, 53, 76)");
  doc.style.setProperty("--theme-color", "rgb(160, 83, 119)");
  doc.style.setProperty("--theme-color-overlay", "rgba(160, 83, 119, .9)");

  $("#colorTheme5").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme6
$("#colorTheme6").click(() => {
  doc.style.setProperty("--navbar-color", "rgba(51, 109, 177, 1)");
  doc.style.setProperty("--theme-color", "rgb(74, 174, 255)");
  doc.style.setProperty("--theme-color-overlay", "rgba(51, 139, 255, .9)");

  $("#colorTheme6").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme7
$("#colorTheme7").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(40, 116, 88)");
  doc.style.setProperty("--theme-color", "rgb(61, 174, 132)");
  doc.style.setProperty("--theme-color-overlay", "rgba(61, 174, 132, .9)");

  $("#colorTheme7").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme8").removeClass("selected");
});

// Changing to colorTheme8
$("#colorTheme8").click(() => {
  doc.style.setProperty("--navbar-color", "rgb(42, 82, 152)");
  doc.style.setProperty("--theme-color", "rgb(58, 112, 206)");
  doc.style.setProperty("--theme-color-overlay", "rgba(58, 112, 206, .9)");

  $("#colorTheme8").addClass("selected");
  $("#colorTheme1").removeClass("selected");
  $("#colorTheme2").removeClass("selected");
  $("#colorTheme3").removeClass("selected");
  $("#colorTheme4").removeClass("selected");
  $("#colorTheme5").removeClass("selected");
  $("#colorTheme6").removeClass("selected");
  $("#colorTheme7").removeClass("selected");
});
