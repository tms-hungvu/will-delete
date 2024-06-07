import Joi from "joi"
import { password_regex } from "@/utils/pattern";
import { email_regex } from "@/utils/pattern";
import { messageValidate } from "@/utils/messageValidate";
import { name_regex } from "@/utils/pattern";
export const schemaRegister = Joi.object({
    name : Joi.string()
    .pattern(new RegExp(name_regex))
    .required()
    .messages({
        'string.empty': messageValidate['register.name.required'],
        'string.pattern.base': messageValidate['register.name.regex'],
        'any.required': messageValidate['register.name.required']
    }),
    email : Joi.string()
    .pattern(new RegExp(email_regex))
    .required()
    .messages({
        'string.empty': messageValidate['register.email.required'],
        'string.pattern.base': messageValidate['register.email.regex'],
        'any.required': messageValidate['register.email.required']
    }),
    password : Joi.string()
    .pattern(new RegExp(password_regex))
    .required()
    .messages({
        'any.required': messageValidate['register.password.required'],
        'string.empty': messageValidate['register.password.required'],
        'string.pattern.base': messageValidate['register.password.regex']
    }),
    confirmPassword : Joi.string()
    .pattern(new RegExp(password_regex))
    .equal(Joi.ref('password'))
    .required()
    .messages({
        'any.only': messageValidate['register.confirmPassword.match'],
        'string.empty': messageValidate['register.password.required'],
        'any.required': messageValidate['register.password.required'],
        'string.pattern.base': messageValidate['register.password.regex']
    })
})