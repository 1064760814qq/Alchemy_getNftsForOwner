// import './trans_test';

import { createClient } from 'urql';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'


const APIURL = 'https://api.studio.thegraph.com/query/32121/graph_1/0.1.1/';

const tokensQuery = `
      {
      transfers {
      id
      from
      to
      value
      blocknumber
      timestamp
      }
      }
      `;



const client = createClient({
	url: APIURL,
})

client.query(tokensQuery).toPromise().then((data) => {
	console.log( data );
})
