// export { TestProduct, TestProductPostBody } from "@routes/tests.route";
import { Request } from "express";

export { TReqProperties } from "@middlewares/validator.handler";
// export { GqlContext } from "@resolvers";
export * from "@resolvers/types"

export interface RequestBody<T> extends Request {
	body: T;
}
export type QueryString = Request["query"];
const y: QueryString = {
	perro: "",
}
export interface RequestQuery<T extends QueryString> extends Request {
	query: T;
}
export type ParamsDictionary = Request["params"];
export interface RequestParams<T> extends Request<T> {
	// params: T;
}
