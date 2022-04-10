// const { Router } = require("express");
import { Router } from "express";
import { getCategories, addCategory, deleteCategory } from "./category.controller.js";

const router = Router();

router.get("/", getCategories);
router.post("/", addCategory);
router.delete("/", deleteCategory);

export default router;
