const sequelize = require("sequelize");
const dataBase = require("../db");

const encryptedName = dataBase.define(
  "encrypted_names",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    encrypted_name: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

const init = async () => {
  await encryptedName.sync();
};

init();

module.exports = encryptedName;
