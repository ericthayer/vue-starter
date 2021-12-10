import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// example of API in .env file (rebuild required to see change)

// API_URI=https://n345jn45j345.appsync-api.us-east-2.amazonaws.com/graphql
// API_KEY=da2-j48fb9734549sf98598y

const httpLink = createHttpLink({
  uri: process.env.API_URI,

  headers: {
    "x-api-key": process.env.API_KEY
  }
});

// Cache implementation
const cache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache
});
