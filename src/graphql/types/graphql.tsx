import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  additionalAddressInfo?: Maybe<Scalars['String']>;
  additionalStreetInfo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  streetName: Scalars['String'];
  streetNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AttributeFilter = {
  attribute?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type BaseAddress = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>;
  additionalStreetInfo?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  streetName: Scalars['String'];
  streetNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Maybe<Address>>>;
  billingAddresses?: Maybe<Array<Maybe<Scalars['Int']>>>;
  companyName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  shippingAddresses?: Maybe<Array<Maybe<Scalars['Int']>>>;
  title?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type CustomerCreatePasswordResetToken = {
  email?: InputMaybe<Scalars['String']>;
  ttlMinutes: Scalars['Int'];
};

export type CustomerDraft = {
  addresses?: InputMaybe<Array<InputMaybe<BaseAddress>>>;
  billingAddresses?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  companyName?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  defaultBillingAddress?: InputMaybe<Scalars['Int']>;
  defaultShippingAddress?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  salutation?: InputMaybe<Scalars['String']>;
  shippingAddresses?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  title?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
};

export type CustomerSignInResult = {
  __typename?: 'CustomerSignInResult';
  cart?: Maybe<Cart>;
  customer?: Maybe<Customer>;
};

export type CustomerToken = {
  __typename?: 'CustomerToken';
  createdAt?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Dimensions = {
  __typename?: 'Dimensions';
  h?: Maybe<Scalars['Int']>;
  w?: Maybe<Scalars['Int']>;
};

export type DiscountedPrice = {
  __typename?: 'DiscountedPrice';
  value?: Maybe<TypedMoney>;
};

export type FacetRange = {
  __typename?: 'FacetRange';
  count?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  productCount?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type FacetResult = {
  __typename?: 'FacetResult';
  attribute?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  productCount?: Maybe<Scalars['Int']>;
  ranges?: Maybe<Array<Maybe<FacetRange>>>;
  terms?: Maybe<Array<Maybe<FacetTerm>>>;
  type?: Maybe<Scalars['String']>;
};

export type FacetTerm = {
  __typename?: 'FacetTerm';
  count?: Maybe<Scalars['Int']>;
  productCount?: Maybe<Scalars['Int']>;
  term?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  dimensions?: Maybe<Dimensions>;
  url?: Maybe<Scalars['String']>;
};

export type InputAddress = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>;
  additionalStreetInfo?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  streetName: Scalars['String'];
  streetNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  version: Scalars['Int'];
};

export type MainNavigationTreeItem = {
  __typename?: 'MainNavigationTreeItem';
  children: Array<Maybe<MainNavigationTreeItem>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress?: Maybe<Customer>;
  changePassword?: Maybe<Customer>;
  login?: Maybe<Token>;
  logout?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Token>;
  removeAddress?: Maybe<Customer>;
  signup?: Maybe<CustomerSignInResult>;
  updateAddress?: Maybe<Customer>;
  updateProfile?: Maybe<Customer>;
};


export type MutationAddAddressArgs = {
  address?: InputMaybe<InputAddress>;
};


export type MutationChangePasswordArgs = {
  changePassword?: InputMaybe<MyCustomerChangePassword>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveAddressArgs = {
  removeAddress?: InputMaybe<MyCustomerRemoveAddress>;
};


export type MutationSignupArgs = {
  customerDraft?: InputMaybe<CustomerDraft>;
};


export type MutationUpdateAddressArgs = {
  address?: InputMaybe<InputAddress>;
};


export type MutationUpdateProfileArgs = {
  profile?: InputMaybe<Profile>;
};

export type MyCustomerChangePassword = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  version: Scalars['Int'];
};

export type MyCustomerRemoveAddress = {
  addressId: Scalars['String'];
  version: Scalars['Int'];
};

export type MyCustomerResetPassword = {
  newPassword: Scalars['String'];
  tokenValue: Scalars['String'];
};

export type Price = {
  __typename?: 'Price';
  country?: Maybe<Scalars['String']>;
  discounted?: Maybe<DiscountedPrice>;
  id: Scalars['String'];
  validFrom?: Maybe<Scalars['String']>;
  validUntil?: Maybe<Scalars['String']>;
  value: TypedMoney;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  price?: Maybe<Price>;
  url?: Maybe<Scalars['String']>;
};

export type ProductDetail = {
  __typename?: 'ProductDetail';
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Image>;
  masterVariant?: Maybe<ProductVariant>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
};

export type ProductList = {
  __typename?: 'ProductList';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<Product>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ProductSearchResult = {
  __typename?: 'ProductSearchResult';
  count?: Maybe<Scalars['Int']>;
  facets?: Maybe<Array<Maybe<FacetResult>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<Product>>>;
  sortOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  availability?: Maybe<ProductVariantAvailability>;
  id: Scalars['Int'];
  images?: Maybe<Array<Maybe<Image>>>;
  isMatchingVariant?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  price?: Maybe<Price>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductVariantAvailability = {
  __typename?: 'ProductVariantAvailability';
  availableQuantity?: Maybe<Scalars['Int']>;
  isOnStock?: Maybe<Scalars['Boolean']>;
  restockableInDays?: Maybe<Scalars['Int']>;
};

export type Profile = {
  companyName?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
  version: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  customerActiveCart?: Maybe<Cart>;
  customerDetails?: Maybe<Customer>;
  guestToken?: Maybe<Token>;
  mainNavigationTreeItems?: Maybe<Array<Maybe<MainNavigationTreeItem>>>;
  productById?: Maybe<ProductDetail>;
  productBySlug?: Maybe<ProductDetail>;
  productSearch?: Maybe<ProductSearchResult>;
  products?: Maybe<ProductList>;
  route?: Maybe<Route>;
};


export type QueryProductByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProductBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductSearchArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<InputMaybe<AttributeFilter>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['String']>;
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};

export type Route = {
  __typename?: 'Route';
  entityType: Scalars['String'];
  id: Scalars['String'];
  statusCode: Scalars['Int'];
  url: Scalars['String'];
};

export type TermFacetResult = {
  __typename?: 'TermFacetResult';
  dataType?: Maybe<Scalars['String']>;
  terms?: Maybe<Array<Maybe<FacetTerm>>>;
  total?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  access_token?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
};

export type TypedMoney = {
  __typename?: 'TypedMoney';
  centAmount?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['String']>;
  fractionDigits?: Maybe<Scalars['Int']>;
};


export const ProductListDocument = gql`
    query ProductList($limit: Int!, $offset: Int!, $filters: [AttributeFilter], $sort: String, $categoryId: String!) {
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
    `;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useProductListQuery(baseOptions: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;
export type ProductListQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filters?: InputMaybe<Array<InputMaybe<AttributeFilter>> | InputMaybe<AttributeFilter>>;
  sort?: InputMaybe<Scalars['String']>;
  categoryId: Scalars['String'];
}>;


export type ProductListQuery = { __typename?: 'Query', productSearch?: { __typename?: 'ProductSearchResult', total?: number | null, sortOptions?: Array<string | null> | null, offset?: number | null, limit?: number | null, facets?: Array<{ __typename?: 'FacetResult', attribute?: string | null, type?: string | null, productCount?: number | null, ranges?: Array<{ __typename?: 'FacetRange', from?: number | null, to?: number | null, productCount?: number | null } | null> | null, terms?: Array<{ __typename?: 'FacetTerm', term?: string | null, count?: number | null, productCount?: number | null } | null> | null } | null> | null, results?: Array<{ __typename?: 'Product', id: string, name: string, url?: string | null, image?: { __typename?: 'Image', url?: string | null } | null, price?: { __typename?: 'Price', id: string, country?: string | null, validFrom?: string | null, validUntil?: string | null, value: { __typename?: 'TypedMoney', centAmount?: number | null, currencyCode?: string | null, fractionDigits?: number | null } } | null } | null> | null } | null };
