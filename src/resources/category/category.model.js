import { DataTypes } from "sequelize";
import sequelize from "../../utils/db-connection.js";

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

export default Category;
