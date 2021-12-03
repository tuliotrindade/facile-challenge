const Joi = require('joi');

const nameSchema = Joi.object().keys({
  name: Joi.string().required(),
});

const validateName = (req, res, next) => {
  const { error } = nameSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      code: 'E_VALIDATION_FAILURE',
      message: error.message,
    });
  }
  next();
};

module.exports = validateName;