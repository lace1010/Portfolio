const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(
  helmet({
    dnsPrefetchControl: false,
    contentSecurityPolicy: false,
  })
);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/projects.html", (req, res) => {
  res.sendFile(__dirname + "/views/projects.html");
});

app.get("/resume.html", (req, res) => {
  res.sendFile(__dirname + "/views/resume.html");
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
