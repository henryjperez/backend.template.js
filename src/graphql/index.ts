import { ApolloServer, ApolloServerPlugin, BaseContext } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { schemas as typeDefs } from "@schemas";
import { resolvers } from "@resolvers";
import { isDevMode } from "@config";

const plugins: ApolloServerPlugin<BaseContext>[] = [];
if (isDevMode) {
	plugins.push(ApolloServerPluginLandingPageLocalDefault({ embed: true })); // the playground will not work if in "src/routes/graphql.route.ts" jwt authentication is enabled
}

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins,
});