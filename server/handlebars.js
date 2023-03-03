const express = require("express");
const router = express.Router();
const path = require("path");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

router.post("/api/admin/sendmail", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dealsghar00@gmail.com",
      pass: "bjobkqldewbqvzoz",
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.join(__dirname, "..", "views"),
      defaultLayout: "email",
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));
  var mailOptions = {
    from: req.body.username,
    to: "admin@dealsghar.com",
    subject: "Message Sent Successfully",
    template: "email",
    context: {
      username: req.body.username,
      email: req.body.email,
      message: req.body.message,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mail Sent");
      res.status(200).json({ message: "Mail Sent" });
    }
  });
});

module.exports = router;
