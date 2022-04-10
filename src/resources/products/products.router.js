// const { Router } = require("express");
import { Router } from "express";
import { getProducts, addProduct, deleteProduct } from "./products.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/", deleteProduct);

export default router;
