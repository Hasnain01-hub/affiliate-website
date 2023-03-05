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
  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  };

  // transporter.use("compile", hbs(handlebarOptions));

  var mailOptions = {
    from: req.body.username,
    to: "admin@dealsghar.com",
    subject: "Message Sent Successfully",
    html: `<!doctype html>
    <html lang="en-US">
    
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>New Account Email Template</title>
        <meta name="description" content="New Account Email Template.">
        <style type="text/css">
            a:hover {
                text-decoration: underline !important;
            }
        </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <a href="#" title="logo" target="_blank">
                                    <img width="180"
                                        src="https://i.ibb.co/KmbwVQg/logo-3e7528cb1aa6be19cf48.png"
                                        title="logo" alt="logo">
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px; background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h1
                                                style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                                Message Recieved
                                            </h1>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <p
                                                style="color:#455056; font-size:18px;line-height:20px; margin:0; font-weight: 500;">
                                                <strong
                                                    style="display: block;font-size: 13px; margin: 0 0 4px; color:rgba(0,0,0,.64); font-weight:normal;">Username</strong>${req.body.username}
                                                <strong
                                                    style="display: block; font-size: 13px; margin: 24px 0 4px 0; font-weight:normal; color:rgba(0,0,0,.64);">Email</strong>${req.body.email}
                                                <strong
                                                    style="display: block; font-size: 13px; margin: 24px 0 4px 0; font-weight:normal; color:rgba(0,0,0,.64);">Message</strong>${req.body.message}
                                            </p>
    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        
    </body>
    
    </html>`,
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
