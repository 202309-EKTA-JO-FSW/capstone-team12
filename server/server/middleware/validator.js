const { check } = require("express-validator");

const validatorUserSigneUp = [
  check("fullname")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be within 3 to 20 character"),
  check("email").normalizeEmail().isEmail().withMessage("Invalide email"),
  check("password").trim().not().isEmpty().isLength({ min: 3, max: 10 }),
];
const validationResult = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();
  const error = result[0].msg;
  res.json({ seccess: false, message: error });
};

module.exports = {
  validatorUserSigneUp,validationResult
};
