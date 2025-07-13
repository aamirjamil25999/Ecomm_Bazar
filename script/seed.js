require("dotenv").config();
const { connectDB } = require("../config/db");

const Admin = require("../models/Admin");
const adminData = require("../utils/admin");

const Customer = require("../models/Customer");
const customerData = require("../utils/customers");

const Coupon = require("../models/Coupon");
const couponData = require("../utils/coupon");

const Product = require("../models/Product");
const productData = require("../utils/products");

const Order = require("../models/Order");
const orderData = require("../utils/orders");

const Category = require("../models/Category");
const categoryData = require("../utils/categories");

const Language = require("../models/Language");
const languageData = require("../utils/language");

const Currency = require("../models/Currency");
const currencyData = require("../utils/currency");

const Attribute = require("../models/Attribute");
const attributeData = require("../utils/attributes");

const Setting = require("../models/Setting");
const settingData = require("../utils/settings");

connectDB();
const importData = async () => {
  try {
    await Language.deleteMany();
    await Language.insertMany(languageData);

    await Currency.deleteMany();
    await Currency.insertMany(currencyData);

    await Attribute.deleteMany();
    await Attribute.insertMany(attributeData);

    // await Customer.deleteMany();
    // await Customer.insertMany(customerData);

    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    await Product.deleteMany();
    await Product.insertMany(productData);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);

    await Order.deleteMany();
    await Order.insertMany(orderData);

    await Setting.deleteMany();
    await Setting.insertMany(settingData);

    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
