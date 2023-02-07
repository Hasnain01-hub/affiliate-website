const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../model/user.model");
const AdminModel = require("../model/Admin.model");

exports.registerController = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }

  User.findOne({
    email: email,
  }).exec(async (err, user) => {
    if (user) {
      return res.status(400).json({
        error: "User already exists",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(password, salt);
      const user = new User({
        name: email.split("@")[0],
        email,
        password: hashed_password,
      });

      user.save((err, user) => {
        if (err) {
          return res.status(400).json({
            error: "Some error occured! Please try again" + err,
          });
        } else {
          const token = jwt.sign(
            {
              _id: user._id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            }
          );
          // res.cookie("jwt", token);
          res.status(200).json({
            success: true,
            user,
            token,
            message: "Register Success! Please Login now to continue.",
          });
        }
      });
    }
  });
};

exports.loginController = (req, res) => {
  const { email, password } = req.body;
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   const firstError = errors.array().map((error) => error.msg)[0];
  //   return res.status(400).json({
  //     error: firstError,
  //   });
  // } else {
  User.findOne({
    email: email,
  }).exec(async (err, user) => {
    if (err || !user) {
      return res.status(401).json({
        error: "User does not exists. Please register",
      });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(401).json({
          error: "Invalid Password",
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            _id: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        );

        // const { _id } = user;
        // res.cookie("jwt", token);
        res.json({
          token,
          user: {
            email: user.email,
            name: user.name,
          },
        });
      } else {
        res.status(401).json({
          error: "Invalid Password",
        });
      }
    });
  });
  // }
};

exports.fetchUserData = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      message: "User is logged in successfully!",
      success: true,
      user: req.user,
    });
  } else {
    res.status(401).json({
      message: "Invalid user id!",
      success: false,
    });
  }
};

exports.adminLogin = (req, res) => {
  const admin = req.body;

  console.log(req.body);

  AdminModel.findOne({ email: admin.email })
    .then((doc) => {
      if (doc.password === admin.password) {
        return res.status(200).json(doc);
      } else {
        return res.status(403).json({ code: "InvPass" });
      }
    })
    .catch((err) => {
      return res.status(404).json({ message: "noAccFound" });
    });
};
