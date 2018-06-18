const Validator = require('validator')
const isEmpty = require ('./isempty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';


  if(!Validator.isLength(data.handle, {min: 2, max:40})) {
    errors.handle = 'handle must be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'handle is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'skills are required';
  }

  if(!isEmpty(data.website)) {
    if(!Validator.isURL(data.website)) {
      errors.website = 'website is not a url';
    }
  }

  if(!isEmpty(data.youtube)) {
    if(!Validator.isURL(data.youtube)) {
      errors.youtube = 'website is not a url';
    }
  }

  if(!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter)) {
      errors.twitter = 'website is not a url';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};