import Product from "../models/Product.js";
import { ProductValid } from "../validations/ProductValid.js";
import { v2 as cloudinary } from "cloudinary";
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("categories", "name")
      .populate("type", "name");

    if (products && products.length > 0) {
      return res.status(200).json({
        message: "Get all products successfully",
        products,
      });
    }
    return res.status(404).json({
      message: "Products not found",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({
        path: "categories",
        select: "name",
      })
      .populate({ path: "types", select: "name" });
    if (product) {
      return res.status(200).json({
        message: "Get detail product successfully",
        product,
      });
    }
    return res.status(404).json({
      message: "Product not found",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const fileImg = req.file;
    const { error } = ProductValid.validate({
      ...req.body,
      image: fileImg?.path,
    });
    if (error) {
      if (fileImg) {
        await cloudinary.uploader.destroy(fileImg.filename);
      }
      const errors = error.details.map((error) => error.message).join(", ");
      return res.status(400).json({
        message: errors,
      });
    }

    const product = await Product.create({ ...req.body, image: fileImg?.path });
    if (product) {
      return res.status(201).json({
        message: "Create product successfully",
        product,
      });
    }
    return res.status(400).json({
      message: "Create product failed",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const fileImg = req.file;
    const { error } = ProductValid.validate({
      ...req.body,
      image: fileImg?.path,
    });
    if (error) {
      if (fileImg) {
        await cloudinary.uploader.destroy(fileImg.filename);
      }
      const errors = error.details.map((error) => error.message).join(", ");
      return res.status(400).json({
        message: errors,
      });
    }
    const oldImg = await Product.findById(req.params.id)?.image;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body, image: fileImg?.path },
      {
        new: true,
      }
    );
    if (oldImg) {
      await cloudinary.uploader.destroy(oldImg);
    }
    if (product) {
      return res.status(200).json({
        message: "Update product successfully",
        product,
      });
    }
    return res.status(400).json({
      message: "Update product failed",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      return res.status(200).json({
        message: "Delete product successfully",
        product,
      });
    }
    return res.status(400).json({
      message: "Delete product failed",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateView = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $inc: { numReviews: 1 } },
      { new: true }
    );
    if (product) {
      return res.status(200).json({
        message: "Update view successfully",
        product,
      });
    }
    return res.status(400).json({
      message: "Update view failed",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
