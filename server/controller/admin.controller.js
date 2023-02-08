const AdminModel = require("../model/Admin.model");
const AffiliateIDModel = require("../model/AffiliateID.model");
const productModel = require("../model/product.model");
const StoreMode = require("../model/Store.mode");

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

exports.viewDeals = (req, res) => {
  const product = productModel
    .find({})
    .sort({ _id: -1 })
    .then((doc) => {
      if (doc) {
        res.json(doc);
      }
    });
};

exports.deletedeals = (req, res) => {
  const product = productModel
    .findOneAndDelete({ _id: req.body._id })
    .exec((err, data) => {
      if (err) throw new Error(err);
      res.json("Paper deleted successfully");
    });
};

exports.AddStore = (req, res) => {
  const name = req.body;
  const store = new StoreMode(name);

  store
    .save()
    .then((doc) => {
      return res.status(200).json({ message: "Store Added" });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Internal Server Error" });
    });
};

exports.viewStore = (req, res) => {
  const store = StoreMode.find({})
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.addAFfiliateID = (req, res) => {
  const id = new AffiliateIDModel(req.body);

  id.save()
    .then((doc) => {
      return res.status(200).json({ message: "added" });
    })
    .catch((err) => {
      res.status(400).json({ message: "error" });
    });
};

exports.getAffiliateIDS = (req, res) => {
  const ids = AffiliateIDModel.find({})
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
