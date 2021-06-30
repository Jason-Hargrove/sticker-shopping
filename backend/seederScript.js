require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

// async because it will be woring with the database.
// deleteMany delets all the items in the database currently.
// insertMany puts in productData.
// process.exit(); becuse this isn't supose to run the whole time.
// process.exit(1) = exit with failure. process.exit(0) exit with success.
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data Import Successful");
    process.exit();
  } catch (error) {
    console.error("Error With Data Import");
    process.exit(1);
  }
};

// when called run this function immediately.
// need to add "data:import": "node backend/seederScript.js"
importData();
