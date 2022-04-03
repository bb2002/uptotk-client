import * as Joi from 'joi';

const UploadPostSchema = Joi.object({
  authMethod: Joi.string().required().valid('open', 'password'),
  password: Joi.string().allow('').min(4).max(30),
  expiredDate: Joi.number().min(1).max(90),
  downloadLimit: Joi.number().min(0).max(10000),
})

export default UploadPostSchema;