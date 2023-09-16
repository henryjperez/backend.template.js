import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

import { schemas as typeDefs } from "@schemas";
import { resolvers } from "@resolvers";
import { isDevMode } from "@config";

const playground = !isDevMode
	?
	ApolloServerPluginLandingPageLocalDefault({ embed: true })
	// ApolloServerPluginLandingPageProductionDefault({ embed: true, graphRef: 'myGraph@prod' })
	:
	ApolloServerPluginLandingPageLocalDefault({ embed: true })

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [
		playground,
	],
});