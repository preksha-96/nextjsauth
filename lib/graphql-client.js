// lib/graphql-client.js
import { GraphQLClient } from '@kibocommerce/graphql-client';

export const graphQLClient = new GraphQLClient({
  endpoint: 'http://localhost:3001/sign-up',
  fetchOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': 'YOUR_ACCESS_TOKEN_HERE',
      // Add any additional headers if required
    },
  },
});
