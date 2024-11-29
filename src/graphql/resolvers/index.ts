// import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";
import { UserServices } from "@services/user.services";
import { JWTPayload, Resolvers, User } from "@interfaces";
import { dateScalar } from "@scalars";

const userService = new UserServices();
// export type GqlContext = ReturnType<<JWTPayload>>
export const resolvers: Resolvers = {
// export const resolvers: Resolvers<GqlContext> = {
	Query: {
		abc: () => "abc",
		user: async (obj, args, context, info) => {
			const user = await userService.findById(Number(args.id));
			return user;
		},
		users: async (obj, args, context, info) => {
			const users = await userService.findMany(args.skip, args.limit);
			return users;
		},
		test: (obj, args, context, info) => {
			return {
				ping: "pong",
				pong: "ping",
			};
		},
	},
	Mutation: {
		setAbc: (obj, args, context, info) => "Set test string " + String(args.value),
		setTest: (obj, args, context, info) => "More testing strings " + args?.value,
	},
	Date: dateScalar,
};
