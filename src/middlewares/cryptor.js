const jwt = require('jsonwebtoken');

const SECRET = 'jirayaOninjaComMaisMissoes';

const nameCryptor = (req, _res, next) => {
	const { name } = req.body;
	const encriptedName = jwt.sign(name, SECRET);
	req.encriptedName = encriptedName;
	next();
}

module.exports = nameCryptor;