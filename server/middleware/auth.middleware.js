const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

exports.verifyuser = async (req, res, next) => {
  const authHeader = req.headers.authtoken;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader;

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      const userData = await User.findOne({ _id: user._id });

      if (!userData) {
        return res.status(403).json("User not found!");
      }
      req.user = userData;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
