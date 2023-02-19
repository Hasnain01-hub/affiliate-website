const AdminModel = require("../model/Admin.model");
const AffiliateIDModel = require("../model/AffiliateID.model");
const productModel = require("../model/product.model");
const StoreMode = require("../model/Store.mode");
const ItemModel = require("../model/Item.model");
const ProductCategoryModel = require("../model/ProductCategory.model");
const userModel = require("../model/user.model");
const BannersModel = require("../model/Banners.model");

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

//View all admin side deals
exports.viewAllDeals = (req, res) => {
  productModel
    .find({})
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

exports.removeProduct = (req, res) => {
  ItemModel.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      return res.json({ message: "Deleted" });
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.removeStore = (req, res) => {
  StoreMode.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      return res.json({ message: "Deleted" });
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.getUsers = (req, res) => {
  userModel
    .find({ tag: "" })
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.attachAffiliate = (req, res) => {
  userModel.findByIdAndUpdate(
    req.body.users,
    {
      tag: req.body.tags,
    },
    function (err, docs) {
      if (err) {
      } else {
        AffiliateIDModel.findOneAndDelete({ name: req.body.tags })
          .then((doc) => {
            return res.json({ message: "Id Attached" });
          })
          .catch((err) => {
            res.status(400).json({ message: "Err" });
          });
      }
    }
  );
};

exports.viewUsers = (req, res) => {
  userModel.find({}).then((doc) => {
    res.json(doc);
  });
};

exports.getSingleUser = (req, res) => {
  userModel
    .findById(req.params.id)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(400).json({ error: "Bad Req" });
    });
};

exports.updateUser = (req, res) => {
  const user = req.body;

  userModel
    .findByIdAndUpdate(req.body._id, user)
    .then((doc) => {
      res.status(200).json({ message: "Doc Updated" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error" });
    });
};

exports.addBanner = (req, res) => {
  const banner = new BannersModel(req.body);

  banner
    .save()
    .then((doc) => {
      return res.status(200).json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.getBanners = (req, res) => {
  BannersModel.find({})
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.deleteBanner = (req, res) => {
  BannersModel.findByIdAndDelete(req.params.id)
    .then((res) => {
      res.status(200).json({ message: "Document Deleted" });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getDashboard = (req, res) => {
  let data = {
    id: null,
    products: null,
    deals: null,
    stores: null,
    categories: null,
    banners: null,
    users: null,
    admins: null,
  };

  Promise.all([
    AffiliateIDModel.count().exec(),
    ItemModel.count().exec(),
    productModel.count().exec(),
    StoreMode.count().exec(),
    ProductCategoryModel.count().exec(),
    BannersModel.count().exec(),
    userModel.count().exec(),
    AdminModel.count().exec(),
  ]).then((counts) => {
    (data.id = counts[0]),
      (data.products = counts[1]),
      (data.deals = counts[2]),
      (data.stores = counts[3]),
      (data.categories = counts[4]),
      (data.banners = counts[5]),
      (data.users = counts[6]),
      (data.admins = counts[7]);

    res.json(data);
  });
};

exports.getSingleDeal = (req, res) => {
  const deal = productModel
    .findById(req.params.id)
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};
