const AdminModel = require("../model/Admin.model");

exports.addAdmin = (req, res) => {
  const admin = new AdminModel(req.body);

  admin
    .save()
    .then((doc) => {
      if (doc) {
        return res.status(200).json({ message: "Success" });
      }
    })
    .catch((err) => {
      return res.status(404).json({ message: "error" });
    });
};

exports.viewAdmin = (req, res) => {
  const admin = AdminModel.find({})
    .sort({ _id: -1 })
    .then((doc) => {
      if (doc) {
        res.json(doc);
      }
    });
};
