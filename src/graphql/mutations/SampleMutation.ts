import SampleFragment from '@/graphql/fragments/SampleFragment'
import { gql } from '@apollo/client'

const SampleMutation = gql`
  mutation SampleMutation() {
    ...SampleFragment
  }
  ${SampleFragment}
`

export default SampleMutation
