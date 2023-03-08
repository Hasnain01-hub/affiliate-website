const AdminModel = require("../model/Admin.model");
const AffiliateIDModel = require("../model/AffiliateID.model");
const StoreMode = require("../model/Store.mode");
const ItemModel = require("../model/Item.model");
const ProductCategoryModel = require("../model/ProductCategory.model");
const userModel = require("../model/user.model");
const BannersModel = require("../model/Banners.model");
const path = require("path");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

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
  ItemModel.find({})
    .sort({ _id: -1 })
    .then((doc) => {
      if (doc) {
        res.json(doc);
      }
    });
};

exports.viewDeals = (req, res) => {
  const product = ItemModel.find({ isHomePageDeal: true })
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
  const product = ItemModel.findOneAndDelete({ _id: req.body._id }).exec(
    (err, data) => {
      if (err) throw new Error(err);
      res.json("Paper deleted successfully");
    }
  );
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
  const { id } = req.body;

  if (id == "1") {
    const item = new ItemModel(req.body);
    item
      .save()
      .then((doc) => {
        return res.status(200).json({ message: "Added" });
      })
      .catch((err) => {
        return res.status(400).json({ message: "Error" });
      });
  } else {
    ItemModel.findByIdAndUpdate({ _id: id }, { $set: req.body }).then((doc) => {
      return res.status(201).json({ data: doc });
    });
  }
};

exports.updateCatogery = (req, res) => {
  const { id } = req.params;
  ProductCategoryModel.findByIdAndUpdate({ _id: id }, { $set: req.body }).then(
    (doc) => {
      return res.status(201).json({ data: doc });
    }
  );
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
    StoreMode.count().exec(),
    ProductCategoryModel.count().exec(),
    BannersModel.count().exec(),
    userModel.count().exec(),
    AdminModel.count().exec(),
  ]).then((counts) => {
    (data.id = counts[0]),
      (data.deals = counts[1]),
      (data.stores = counts[2]),
      (data.categories = counts[3]),
      (data.banners = counts[4]),
      (data.users = counts[5]),
      (data.admins = counts[6]);

    res.json(data);
  });
};

exports.getSingleDeal = (req, res) => {
  let deals = {
    product: null,
    similar: null,
  };

  const deal = ItemModel.findById(req.params.id)
    .then((doc) => {
      ItemModel.find({ _id: { $ne: doc.id }, deal_category: doc.deal_category })
        .limit(4)
        .then((docs) => {
          deals.product = doc;
          deals.similar = docs;
          return res.json(deals);
        });
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.getCategoryDeals = (req, res) => {
  ItemModel.find({ deal_category: req.params.cat })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};

exports.getSingleProductDeal = (req, res) => {
  ItemModel.findById(req.params.id)
    .then((doc) => {
      return res.json(doc);
    })
    .catch((err) => {
      return res.json(err);
    });
};
