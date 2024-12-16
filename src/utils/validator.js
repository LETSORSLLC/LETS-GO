const validator = require('validator');

// Validate email
exports.validateEmail = (email) => {
  return validator.isEmail(email);
};

// Validate password
exports.validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

// Validate name
exports.validateName = (name) => {
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  return nameRegex.test(name);
};

// Validate phone number
exports.validatePhoneNumber = (phoneNumber) => {
  return validator.isMobilePhone(phoneNumber, 'any');
};
