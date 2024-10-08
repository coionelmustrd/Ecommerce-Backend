// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: "tag_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
})

Category.hasMany(Product, {
  foreignKey: "category_id",
})

module.exports = { Product, Category, Tag, ProductTag };