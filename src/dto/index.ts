export * from "./tests.dto";
export * from "./auth.dto";

// -------
import Joi from "joi";

export function validateSchema<T>(schema: Joi.Schema<T>, input: T) {
	const { error, value } = schema.validate(input, { abortEarly: false });

	if (error) {
		throw error;
	}

	return value;
}