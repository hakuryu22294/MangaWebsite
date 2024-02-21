import Joi from "joi";

export const signUpValid = Joi.object({
  username: Joi.string().required().min(3).messages({
    "string.empty": "User Name không được để trống",
    "string.min": "User Name tối thiểu 3 ký tự",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Password không được để trống",
    "string.min": "Password tối thiểu 3 ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "Confirm Password không được để trống",
    "any.only": "Confirm Password phải trùng khớp",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": 'Trường "email" không được để trống',
    "string.email": 'Trường "email" không đúng định dạng',
    "any.required": 'Trường "email" là bắt buộc',
  }),
  role: Joi.string().valid("admin", "member").messages({
    "any.only": "Role phải đúng nghĩa",
  }),
  address: Joi.string(),
  tel: Joi.number(),
});

export const signInValid = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": 'Trường "email" không được để trống',
    "string.email": 'Trường "email" không đúng định dạng',
    "any.required": 'Trường "email" là bắt buộc',
  }),
  password: Joi.string().required().min(6).message({
    "string.empty": "Password không được để trống",
    "string.min": "Password tối thiểu 3 ký tự",
  }),
});
