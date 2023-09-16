import Joi from "joi";

const password = Joi.string().required().max(255).required();

export interface UserLogin {
	username: string;
	password: string;
}

export const postUserLoginSchema = Joi.object<UserLogin>({
	username: Joi.string().required().max(255).required(),
	password,
});

export interface UserRegistry {
	email: string;
	password: string;
	name: string;
}


export const postUserRegisterSchema = Joi.object<UserRegistry>({
	name: Joi.string().required().max(255).required(),
	email: Joi.string().required().max(255).required(),
	password,
});
