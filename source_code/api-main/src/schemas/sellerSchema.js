import joi from "joi";

export const createSeller = joi.object({
  full_name: joi.string().required(),
  email: joi.string().email().required(),
  registration: joi.string().required()
});

export const updateSeller = joi.object({});
