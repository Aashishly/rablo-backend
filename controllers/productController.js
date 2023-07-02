const Product = require('../models/Product');

// Add a product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Get Single Product
const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ productID: productId });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProduct = await Product.findOneAndUpdate(
      { productID: productId },
      req.body,
      { new: true }
    );
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findOneAndDelete({ productID: productId });
    res.status(200).json({ status: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch products with name
const getProductsByName = async (req, res) => {
  try {
    const { productName } = req.params;
    const products = await Product.find({ name: { $regex: productName, $options: 'i' } });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// Fetch products with price less than a certain value
const getProductsByPrice = async (req, res) => {
  try {
    const { value } = req.params;
    const products = await Product.find({ price: { $lt: value } });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch products with rating higher than a certain value
const getProductsByRating = async (req, res) => {
  try {
    const { value } = req.params;
    const products = await Product.find({ rating: { $gt: value } });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductsByPrice,
  getProductsByRating,
  getProductsByName
};
