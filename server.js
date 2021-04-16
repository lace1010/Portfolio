require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

// Use this to receive emails from contact page
const nodemailer = require("nodemailer");

const app = express();
app.use(
  helmet({
    dnsPrefetchControl: false,
    contentSecurityPolicy: false,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Send an email from contact page
app.post("/email", (req, res) => {
  // Will be what is sent in the email
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  ${req.body.message}
  `;

  // The email that is sending the form info to my email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "lace1010@gmail.com",
    subject: req.body.name + " has contacted you via portfolio contact page",
    html: output,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else {
      console.log("Email sent: " + info.response);
    }
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
