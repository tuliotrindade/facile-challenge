const encryptedName = require('../models/encryptedName');

const newEncriptedName = async (name) => {
  const output = await encryptedName.create({ encrypted_name: name });
  return output;
};

const findById = async (id) => {
  const output = await encryptedName.findByPk(id);
  return output;
}

const findAll = async (id) => {
  const output = await encryptedName.findAll();
  return output;
}

module.exports = {
  newEncriptedName,
  findById,
  findAll,
};