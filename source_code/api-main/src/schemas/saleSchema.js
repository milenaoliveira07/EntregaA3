import joi from "joi";

export const createSale = joi.object({
  client_id: joi.number().integer().positive().required(),
  seller_id: joi.number().integer().positive().required(),
  items: joi
    .array()
    .items(
      joi.object({
        product_id: joi.number().integer().positive().required(),
        quantity_purchased: joi.number().integer().min(1).required(),
      })
    )
    .min(1)
    .required(),
});

export const updateSale = joi.object({
  status: joi.string().valid("Processing", "Completed", "Cancelled").required(),
});
