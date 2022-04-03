import { Sequelize }  from "sequelize";

const sequelize = new Sequelize("superapp", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

export default sequelize;