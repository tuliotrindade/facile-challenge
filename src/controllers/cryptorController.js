const cryptorService = require('../services/cryptorService');
const rescue = require('express-rescue');

const newEncriptedName = rescue (async (req, res) => {
  const { encriptedName } = req;
  const output = await cryptorService.newEncriptedName(encriptedName);

  return res.status(201).json(output);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;
  const output = await cryptorService.findById(id);
  if (!output) {
    return res.status(404).json({ message: 'id not found' });
  }
  return res.status(200).json(output);
});

const findAll = rescue(async (req, res) => {
  const output = await cryptorService.findAll();
  if (!output) {
    return res.status(404).json({ message: 'no name has been registered yet' });
  }
  return res.status(200).json(output);
});

module.exports = {
  newEncriptedName,
  findById,
  findAll,
};