module.exports = function (err, _req, res, _next) { 
  res.status(500).json({Erro: err.message });
};