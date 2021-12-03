const jwt = require('jsonwebtoken');

const SECRET = 'jirayaOninjaComMaisMissoes'

const nameCryptor = async (req, _res, next) => {
	const { name } = req.body;
	const encriptedName = jwt.sign(name, SECRET)
	req.encriptedName = encriptedName
	next();
}

module.exports = nameCryptor;