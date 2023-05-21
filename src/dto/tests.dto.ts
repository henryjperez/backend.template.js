import Joi from "joi";
import { QueryGetDogArgs } from "@interfaces";

export const getDogSchema = Joi.object<QueryGetDogArgs>({
	name: Joi.string().required().max(2),
});