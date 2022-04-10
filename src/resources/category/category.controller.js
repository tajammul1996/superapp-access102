import Category from "./category.model.js";
import { responseTemplate } from "../../utils/helpers.js";

export const getCategories = (req, res) => {
  Category.findAll({ raw: true })
    .then((categories) =>
      res
        .status(200)
        .json(
          responseTemplate(
            false,
            "Categories retrieved successfully",
            categories
          )
        )
    )
    .catch((error) =>
      res
        .status(500)
        .json(responseTemplate(true, "Error retrieving categories", error))
    );
};

export const addCategory = (req, res) => {
  const category = req.body.category;
  Category.create({ category })
    .then((category) =>
      res
        .status(200)
        .json(responseTemplate(false, "Category added successfully", category))
    )
    .catch((error) =>
      res
        .status(500)
        .json(responseTemplate(true, error.errors[0].message, {}))
    );
};


export const deleteCategory = (req, res) => {
  const { categoryId } = req.body;
  return Category.destroy({ where: { id: categoryId } })
    .then((result) =>
      res
        .status(200)
        .json(
          responseTemplate(
            false,
            `Category with categoryId- ${categoryId} has been deleted successfully`,
            {}
          )
        )
    )
    .catch((error) =>
      res.status(500).json(responseTemplate(true, error.errors[0].message, {}))
    );
}