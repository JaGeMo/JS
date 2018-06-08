const Validator = require('validator')
const isEmpty = require ('./isempty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  if(!Validator.isLength(data.email, {min: 2, max:30})) {
    errors.name = 'email must be between 2 and 30 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};