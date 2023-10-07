import Joi from "joi";

export interface TestDTOQuery {
	[key: string]: string;
	name: string;
	minimumSevenTeen?: string;
}

export interface TestDTOBody {
	name: string;
	greaterThanSevenTeen?: number;
}

export interface TestDTOParams {
	[key: string]: string;
	firstName: string;
	lastName: string;
}
export const getTestDTOQuerySchema = Joi.object<TestDTOQuery>({
	name: Joi.string().required().max(10),
	minimumSevenTeen: Joi.string().min(17),
});

export const postTestDTOBodySchema = Joi.object<TestDTOBody>({
	name: Joi.string().required().max(10),
	greaterThanSevenTeen: Joi.number().greater(17),
});

export const getTestDTOParamsSchema = Joi.object<TestDTOParams>({
	firstName: Joi.string().required().max(10),
	lastName: Joi.string().required().max(10),
});

export const postImageWithTextBodySchema = Joi.object({
	text: Joi.string().required(),
});
