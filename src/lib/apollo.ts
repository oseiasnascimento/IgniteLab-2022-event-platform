import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4pw6zpb2e3001xnfq2tctzu/master',
  cache: new InMemoryCache()
})