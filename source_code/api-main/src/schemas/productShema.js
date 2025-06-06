import joi from "joi";

export const createProduct = joi.object({
  name: joi.string().max(50).required(),
  description: joi.string().max(100).required(),
  price: joi.number().precision(2).required(),
  stock_quantity: joi.number().integer().required(),
  low_stock: joi.number().integer().required(),
  category: joi.string().max(40).required(),
});

export const updateProduct = joi.object({
  name: joi.string().max(50),
  description: joi.string().max(100),
  price: joi.number().precision(2),
  stock_quantity: joi.number().integer(),
  low_stock: joi.number().integer(),
  category: joi.string().max(40),
});
