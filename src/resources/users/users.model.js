import { DataTypes } from "sequelize";
import sequelize from "../../utils/db-connection.js";

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.STRING,
    defaultValue: "-"
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
  }
}, {
  timestamps: false
})

export default User;