import sequelize from "./db-connection.js";

import User from "../resources/users/users.model.js";

function seed() {
  User.bulkCreate([
    { username: "johan westerman", email: "jwesterman0@sun.com", address: "872 Buell Crossing", phone: "1-859-822-9573" },
    { username: "josephine bernard", email: "josephine@moon.com", address: "845 Meadow Vale Way", phone: "1-868-818-3073" },
    { username: "julie bernard", email: "julie@random.com", address: "845  Vale Way", phone: "1-868-818-9071" },
    { username: "john doe", email: "john@example.com", address: "123 fasdfa Way", phone: "1-868-817-9073" },
    { username: "jane doe", email: "jane@example.com", address: "787 fasdfa Way", phone: "1-808-817-9073" },
  ], {validate: true}).then(console.log).catch(console.log);
}

sequelize
  .authenticate()
  .then(() =>  sequelize.sync({alter: true}))
  .then(() => seed())
  .catch(console.log)