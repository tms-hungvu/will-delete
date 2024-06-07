import Joi from "joi";

import { email_regex, password_regex } from "@/utils/pattern";
import { messageLoginValidate } from "./messageError";

export const schema = Joi.object({
  email: Joi.string().pattern(email_regex).required().messages({
    "string.base": "Email must be a string",
    "string.empty": messageLoginValidate["login.email.required"],
    "string.pattern.base": messageLoginValidate["login.email.regex"],
  }),
  password: Joi.string().pattern(password_regex).required().messages({
    "string.base": "Password must be a string",
    "string.empty": messageLoginValidate["login.password.required"],
    "string.pattern.base": messageLoginValidate["login.password.regex"],
  }),
});
