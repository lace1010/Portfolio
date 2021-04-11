console.log("connected");

// color theme button handlers
$("#colorThemeButton").click(() => {
  $("#tooltipContainer").css({ padding: "1rem", width: "15rem" });
});

$("#tooltipExit").click(() => {
  $("#tooltipContainer").css({ padding: "0", width: "0" });
});

$("#blueColorTheme").click(() => {
  alert("pushed");
});

$("#greenColorTheme").click(() => {
  alert("pushed");
});
