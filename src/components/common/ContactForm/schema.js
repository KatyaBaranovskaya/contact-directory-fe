import Joi from '@hapi/joi';

const schema = Joi.object({
  id: Joi.number(),
  name: Joi.string()
    .required(),
  surname: Joi.string()
    .required(),
  lastname: Joi.string()
    .required(),
  birthday: Joi.date()
    .required(),
  gender: Joi.string()
    .required(),
  nationality: Joi.string()
    .min(3)
    .required(),
  maritalStatus: Joi.string()
    .required(),
  webSite: Joi.string()
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["ru", "com", "net"] } } )
    .required(),
  company: Joi.string()
    .min(3)
    .required(),
  country: Joi.string()
    .min(3)
    .required(),
  city: Joi.string()
    .min(2)
    .required(),
  street: Joi.string()
    .min(3)
    .required(),
  house: Joi.string()
    .required(),
  flat: Joi.string()
    .required(),
  postcode: Joi.string()
    .min(5)
    .required(),
  photo: Joi.string()
    .allow(''),
  phones: Joi.array(),
  attachments: Joi.array(),
  imageSrc: Joi.string()
    .allow(null),
});

export default schema;
