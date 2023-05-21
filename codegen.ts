import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: './src/graphql/schemas/*.gql',
	generates: {
		'./src/graphql/resolvers/types.d.ts': {
			config: {
				useIndexSignature: true,
			},
			plugins: ['typescript', 'typescript-resolvers'],
		}
	}
}

export default config