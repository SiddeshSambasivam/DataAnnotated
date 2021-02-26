const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });
    console.log(data)

    return schema.validate(data);
}

const loginValidation = (data) => {
  console.log("LOGIN VALID", data)
    const schema = Joi.object({
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(6).max(1024).required(),
    });
  
    return schema.validate(data);
  };
  
module.exports = {
    registerValidation,
    loginValidation,
};