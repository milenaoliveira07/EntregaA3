import joi from "joi";

export const createSeller = joi.object({
  full_name: joi.string().max(80).required(),
  email: joi.string().email().max(150).required(),
  registration_prefix: joi.string().max(10).required(),
});

export const updateSeller = joi.object({
  full_name: joi.string().max(80),
  email: joi.string().email().max(150),
});
