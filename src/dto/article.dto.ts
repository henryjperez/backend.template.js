import Joi from "joi";

const id = Joi.string().uuid();
const slug = Joi.string().max(5);
const title = Joi.string().alphanum().min(1).max(100);
const likes = Joi.number().integer().min(0);

export const createArticleSchema = Joi.object({
	title: title.required(),
});

export const getOneArticleSchema = Joi.object({
	slug: slug.required(),
});