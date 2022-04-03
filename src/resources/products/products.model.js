import { DataTypes } from "sequelize";
import sequelize from "../../utils/db-connection.js";


const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 30]
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false
});

export default Product;