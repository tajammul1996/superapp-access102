import Product from "./products.model.js";
import { responseTemplate } from "../../utils/helpers.js";
import Category from "../category/category.model.js";

export const getProducts = (req, res) => {
  return Product.findAll({
    include: [{ model: Category }],
    raw: true,
    nest: true,
    attributes: {
      exclude: ["categoryId"],
    },
  })
    .then((products) =>
      res
        .status(200)
        .json(
          responseTemplate(false, "Products retrieved successfully", products)
        )
    )
    .catch((error) =>
      res.status(500).json(responseTemplate(true, error.errors[0].message, {}))
    );
};

export const addProduct = (req, res) => {
  const { product, price, categoryId } = req.body;

  return Product.create({ product, price, categoryId })
    .then((product) =>
      res.status(200).json(responseTemplate(false, "Product added", product))
    )
    .catch((error) =>
      res.status(500).json(responseTemplate(true, error.errors[0].message, {}))
    );
};

export const deleteProduct = (req, res) => {};
