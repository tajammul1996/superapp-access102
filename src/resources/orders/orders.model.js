import { DataTypes } from "sequelize";
import sequelize from "../../utils/db-connection.js";

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  shipping_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  delivered: {
    type: DataTypes.STRING,
    defaultValue: "N"
  }
}, {
  timestamps: false
})

export default Order;