import path from "path";
import { Product } from "../models/productModel.js";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productWithImage = products.map((product) => ({
      ...product.toJSON(),
      imageUrl: `http://localhost:5000${product.image}`,
    }));
    res.send(productWithImage);
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const getProductsByName = async (req, res) => {
  const { name } = req.params;
  try {
    const product = await Product.findOne({ name });
    if (!product) {
      return res.send({ message: "No Product Exist" });
    }
    res.send(product);
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.send({ message: "No Product Exist" });
    }
    res.send(product);
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const createProduct = async (req, res) => {
  const { name, category, price, label, status } = req.body;
  const lowerName = await name.trim().toLowerCase();
  const image = req.file.filename.trim();
  try {
    const product = new Product({
      name: lowerName,
      category,
      image: `/uploads/${image}`,
      price,
      label,
      status,
    });
    await product.save();
    res.send({ message: "Product uploaded!", imageUrl: `/uploads/${image}` });
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, category, price, label, status } = req.body;
  const image = req.file.filename;

  try {
    await Product.findByIdAndUpdate(id, {
      name,
      category,
      image,
      price,
      label,
      status,
    });
    res.send({ message: "Product updated!" });
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.send({ message: "Product Deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const deleteAllProduct = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.send({ message: "All Product Deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
};
