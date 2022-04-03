import { DataTypes } from "sequelize";
import sequelize from "../../utils/db-connection.js";


const Payment = sequelize.define("payment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail: {
    type: DataTypes.STRING,
    defaultValue: "-"
  }
}, {
  timestamps: false
});

export default Payment;