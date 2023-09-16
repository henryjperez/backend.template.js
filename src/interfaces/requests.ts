// export { TestProduct, TestProductPostBody } from "@routes/tests.route";
import { Request } from "express";

export { TReqProperties } from "@middlewares/validator.handler";
export { GqlContext } from "@resolvers";
export * from "@resolvers/types"

export interface RequestBody<T> extends Request {
	body: T;
}
export type ParamsDictionary = Request["params"];
export interface RequestParams<T extends ParamsDictionary> extends Request {
	params: T;
}
