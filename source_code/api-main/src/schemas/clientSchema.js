import joi from "joi";

export const createClient = joi.object({
  full_name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required()
});


export const updateClient = joi.object({});
