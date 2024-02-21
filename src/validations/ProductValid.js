import Joi from "joi";

export const ProductValid = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required().min(1),
  image: Joi.string()
    .required()
    .regex(/\.(jpg|jpeg|png|gif)$/i),
  quantity_in_stock: Joi.number().required().min(0),
  number_of_volumes: Joi.number().required().min(0),
  desc: Joi.string().required(),
});
