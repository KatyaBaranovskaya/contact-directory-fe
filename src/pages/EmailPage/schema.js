import Joi from '@hapi/joi';

const schema = Joi.object({
  emails: Joi.string()
    .required(),
  title: Joi.string()
    .required(),
  message: Joi.string()
    .allow(''),
});

export default schema;
