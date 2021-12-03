const cryptorService = require('../services/cryptorService');

const newEncriptedName = async (req, res) => {
  const { encriptedName } = req;
  const output = await cryptorService.newEncriptedName(encriptedName);

  return res.status(201).json(output)
}

const findById = async (req, res) => {
  const { id } = req.params;
  const output = await cryptorService.findById(id);
  if (!output) {
    res.status(404).json({ message: 'id not found' });
  }
  return res.status(200).json(output);
}

module.exports = {
  newEncriptedName,
  findById,
};