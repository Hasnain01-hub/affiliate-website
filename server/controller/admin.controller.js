const AdminModel = require("../model/Admin.model");
const AffiliateIDModel = require("../model/AffiliateID.model");
const productModel = require("../model/product.model");
const ProductsModel = require("../model/Item.model");
const StoreMode = require("../model/Store.mode");
const ItemModel = require("../model/Item.model");
const ProductCategoryModel = require("../model/ProductCategory.model");

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
      var datas = [];
      if (doc) {
        doc.forEach((element) => {
          const curr_date = new Date();
          const end_date = new Date(element.end_date);

          if (curr_date.getFullYear() <= end_date.getFullYear()) {
            if (curr_date.getMonth() < end_date.getMonth()) {
              datas.push(element);
            } else if (curr_date.getMonth() == end_date.getMonth()) {
              if (curr_date.getDate() <= end_date.getDate()) {
                datas.push(element);
              }
            }
          }
        });

        res.json(datas);
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
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
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

exports.deleteAffiliateID = (req, res) => {
  AffiliateIDModel.findOneAndDelete({ _id: req.params.id }).then((doc) => {
    return res.status(200).json({ message: "deleted" });
  });
};

exports.getAffiliateIDS = (req, res) => {
  const ids = AffiliateIDModel.find({})
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.addProducts = (req, res) => {
  const item = new ItemModel(req.body);

  item
    .save()
    .then((doc) => {
      return res.status(200).json({ message: "Added" });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Error" });
    });
};

exports.viewProducts = (req, res) => {
  const item = ItemModel.find({})
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.addProductCategory = (req, res) => {
  const category = new ProductCategoryModel(req.body);

  category
    .save()
    .then((doc) => {
      return res.json({ message: "Done" });
    })
    .catch((err) => {
      return res.json({ message: "error" });
    });
};

exports.viewProductCategory = (req, res) => {
  const category = ProductCategoryModel.aggregate([
    {
      $lookup: {
        from: "Items",
        localField: "name",
        foreignField: "category",
        as: "counts",
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        image: 1,
        number_of_product: { $size: "$counts" },
      },
    },
  ]).exec(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.getCategoryProducts = (req, res) => {
  const products = ItemModel.find({ category: req.params.cat })
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};
