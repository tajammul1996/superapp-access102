// const { Router } = require("express");
import { Router } from "express";

const router = Router();

router.all("/", (req, res) => res.json({ message: "Hello user" }));

export default router;
