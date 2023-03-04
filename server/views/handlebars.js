const express = require("express");
const router = express.Router();
const path = require("path");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
var fs = require("fs");
var Handlebars = require("handlebars");

// router.post("/api/admin/sendmail", (req, res) => {
//   var source = fs.readFileSync(path.join(process.cwd(), "email.hbs"), "utf8");

//   console.log(source);

//   var templates = Handlebars.compile(source);

//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "dealsghar00@gmail.com",
//       pass: "bjobkqldewbqvzoz",
//     },
//   });

//   const options = {
//     viewEngine: {
//       extname: ".hbs",
//       layoutsDir: __dirname + "/views/",
//       defaultLayout: "email",
//     },
//     viewPath: __dirname + "/views/",
//   };

//   transporter.use("compile", hbs(options));

//   var mailOptions = {
//     from: req.body.username,
//     to: "admin@dealsghar.com",
//     subject: "Message Sent Successfully",
//     template: "email",
//     context: {
//       username: req.body.username,
//       email: req.body.email,
//       message: req.body.message,
//     },
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Mail Sent");
//       res.status(200).json({ message: "Mail Sent" });
//     }
//   });
// });

router.post("/api/admin/sendmail", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "dealsghar00@gmail.com",
      pass: "bjobkqldewbqvzoz",
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".hbs",
      partialsDir: path.join(__dirname),
      defaultLayout: false,
    },
    viewPath: path.join(__dirname),
    extName: ".hbs",
  };

  transporter.use("compile", hbs(handlebarOptions));
  var mailOptions = {
    from: req.body.username,
    to: req.body.email,
    subject: "Message Sent Successfully",
    template: "email",
    context: {
      username: req.body.username,
      email: req.body.email,
      message: req.body.message,
    },
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);
      console.log(__dirname);
      res.status(400).json({ message: "Mail Not Sent" });
    } else {
      console.log(info);
      res.status(200).json({ message: "Mail Sent" });
    }
  });
});

module.exports = router;
