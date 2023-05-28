import Joi from "joi";
import {  } from "@interfaces";

export const getTestSchema = Joi.object<any>({
	name: Joi.string().required().max(2),
});