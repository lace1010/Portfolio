console.log("connected");

$("form").on("submit", (e) => {
  e.preventDefault();

  const name = $("#name").val().trim();
  const email = $("#email").val().trim();
  const message = $("textarea").val().trim();

  const data = {
    name,
    email,
    message,
  };

  $.post("/email", data, () => {
    console.log("server received our data");
    console.log(data, "<= data");
  });

  $("input").val("");
  $("textarea").val("");
  alert("Email has sent");
});
