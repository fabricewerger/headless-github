import { gql } from '@apollo/client'

const ProductListQuery = gql`
  query ProductList(
    $limit: Int!
    $offset: Int!
    $filters: [AttributeFilter]
    $sort: String
    $categoryId: String!
  ) {
    productSearch(
      limit: $limit
      offset: $offset
      filters: $filters
      sort: $sort
      categoryId: $categoryId
    ) {
      total
      facets {
        attribute
        type
        productCount
        ranges {
          from
          to
          productCount
        }
        terms {
          term
          count
          productCount
        }
      }
      results {
        id
        name
        url
        image {
          url
        }
        price {
          id
          value {
            centAmount
            currencyCode
            fractionDigits
          }
          country
          validFrom
          validUntil
        }
      }
      sortOptions
      offset
      limit
    }
  }
`

export default ProductListQuery
