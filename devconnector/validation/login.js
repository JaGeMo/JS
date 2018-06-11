const Validator = require('validator')
const isEmpty = require ('./isempty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  if(!Validator.isLength(data.email, {min: 2, max:30})) {
    errors.name = 'email must be between 2 and 30 characters';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};