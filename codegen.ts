import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/commercetools',
  documents: [
    './src/graphql/queries/*.ts',
    './src/graphql/mutations/*.ts',
    './src/graphql/fragments/*.ts',
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/types/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        typesPrefix: 'Gql',
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
}

export default config
