import { ApolloServer } from "@apollo/server";
import { schemas as typeDefs } from "@schemas";
import { resolvers } from "@resolvers";

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	// plugins: [],
});