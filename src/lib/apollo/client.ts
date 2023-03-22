import type { NormalizedCacheObject } from '@apollo/client'
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

let client: LocaleApolloClient<NormalizedCacheObject>
const cache = new InMemoryCache()

export const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000',
})

/**
 * Custom Apollo Client class to enable support for setting a locale used by localeLink
 */
class LocaleApolloClient<T> extends ApolloClient<T> {
  private locale = ''

  public setLocale(locale: string): void {
    this.locale = locale
  }

  public getLocale(): string {
    return this.locale
  }
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const initializeApolloClient = (
  link: HttpLink = httpLink
): LocaleApolloClient<NormalizedCacheObject> => {
  client = new LocaleApolloClient({
    cache,
    credentials: 'include',
    link: from([errorLink, link]),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return client
}

export const apolloClient = initializeApolloClient()
