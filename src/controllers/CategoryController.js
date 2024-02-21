import Category from "../models/Category.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories && categories.length > 0) {
      return res.status(200).json({
        message: "Get all categories successfully",
        categories,
      });
    }
    return res.status(404).json({
      message: "Categories not found",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      return res.status(200).json({
        message: "Get detail category successfully",
        category,
      });
    }
    return res.status(404).json({
      message: "Category not found",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    if (category) {
      return res.status(201).json({
        message: "Create category successfully",
        category,
      });
    }
    return res.status(400).json({
      message: "Create category failed",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
