import Joi from '@hapi/joi';

const schema = Joi.object({
  name: Joi.string()
    .required(),
  surname: Joi.string()
    .required(),
  lastname: Joi.string()
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["ru", "com", "net"] } } )
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
  confirmPassword: Joi.ref("password"),
});

export default schema;
