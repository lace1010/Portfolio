const nodemailer = require("nodemailer");
//const mg = require(".......");

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
// const auth = {
//   auth: {
//     api_key: "7a99ef8942c8b194b88e5c07aafd8790-a09d6718-0f10c77f",
//     domain: "sandbox05a956090f2544f8ab90065af8b46cc5.mailgun.org",
//   },
// };

// const nodemailerMailgun = nodemailer.createTransport(mg(auth));

// const sendMail = (name, email, message, callBack) => {
//   const mailOptions = {
//     from: email,
//     to: "lace1010@gmail.com",
//     subject: name + " has contacted you via portfolio contact page",
//     text: message,
//   };

//   nodemailerMailgun.sendMail(mailOptions, (err, data) => {
//     if (err) {
//       callBack(err, null);
//     } else {
//       callBack(null, data);
//     }
//   });
// };

// module.exports = sendMail;
