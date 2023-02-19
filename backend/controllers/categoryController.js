import { Category } from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  const { category } = req.body;
  try {
    if (!category) {
      return res.send("Category is Empty!");
    }
    const create = new Category({
      category,
    });
    await create.save();
    res.send("Category Created!");
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getCategory = async (req, res) => {
  try {
    const response = await Category.find();
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Category.findById(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const deleteCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);
    res.send("Category Deleted!");
  } catch (error) {
    res.status(400).send({ error });
  }
};
export const deleteCategories = async (req, res) => {
  try {
     await Category.deleteMany({});
    res.send("All Categories Deleted!");
  } catch (error) {
    res.status(400).send({ error });
  }
};
