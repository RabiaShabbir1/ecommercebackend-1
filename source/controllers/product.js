const Product = require("../models/products"); // imported user schema
const slugify = require("slugify");
exports.createProduct = (req, res) => {
  console.log(req.body.name);
  const {
    name,
    price,
    description,
    category,
    creator,
    brand,
    quantity,
    review,
  } = req.body;
  let pictures = [];
  if (req.files.length > 0) {
    pictures = req.files.map(file => {
      return { img: file.filename };
    });
  }
  const obj = new Product({
    name: name,
    slug: slugify(name),
    brand: brand,
    price: price,
    description: description,
    image: pictures,
    quantity: quantity,
    review: review,
  });
  obj.save((error, user) => {
    if (error) {
      console.log(error);
      return res.status(404).json({
        message: "Product could not be registered",
      });
    }
    if (user) {
      res.status(200).json({
        user,
      });
    }
  });
};
exports.getProduct = (req, res) => {
  Product.find({}).exec((error, user) => {
    if (error) {
      res.status(400).json({
        message: "Product not found",
      });
    }
    if (user) {
      return res.status(200).json({
        user,
      });
    }
  });
};
