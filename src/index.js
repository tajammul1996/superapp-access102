import express from "express";
import bodyParser from "body-parser";

import sequelize from "./utils/db-connection.js";

import ordersRouter from "./resources/orders/orders.router.js";
import usersRouter from "./resources/users/users.router.js";
import paymentsRouter from "./resources/payments/payments.router.js";
import productsRouter from "./resources/products/products.router.js";
import categoryRouter from "./resources/category/category.router.js";


// seed file
import Order from "./resources/orders/orders.model.js";
import User from "./resources/users/users.model.js";
import Payment from "./resources/payments/payments.model.js";
import Product from "./resources/products/products.model.js";
import Category from "./resources/category/category.model.js";


// Associations related to order table
User.hasMany(Order);
Order.belongsTo(User);

Payment.hasMany(Order);
Order.belongsTo(Payment);

Product.hasMany(Order);
Order.belongsTo(Product);

// Associations related to payment table
User.hasMany(Payment);
Payment.belongsTo(User);

// Associations related to Product 
Category.hasMany(Product);
Product.belongsTo(Category);

const app = express();
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/products", productsRouter);
app.use("/api/categories", categoryRouter);


app.get("/", (req, res) => res.json({ message: "Hello World" }));

const startServer = () => {
  sequelize.sync({force: true});
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected!");
      app.listen(4000, () => console.log("Port 4000 is listening"));
    })
    .catch((e) => console.log(e));
};

startServer();

