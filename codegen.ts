import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000',
  documents: ['./src/graphql/queries/*.ts'],
  generates: {
    './src/graphql/types/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-react-apollo',
        'typescript-operations',
      ],
    },
  },
}

export default config
