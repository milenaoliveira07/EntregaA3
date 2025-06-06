import joi from "joi";

export const createClient = joi.object({
  full_name: joi.string().max(80).required(),
  email: joi.string().email().max(150).required(),
  phone: joi.string().max(15).required(),
  address: joi.string().max(80),
});

export const updateClient = joi.object({
  full_name: joi.string().max(80),
  email: joi.string().email().max(150),
  phone: joi.string().max(15),
  address: joi.string().max(80),
});
