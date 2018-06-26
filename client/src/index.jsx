import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./components/App.jsx";
import JobListing from "./components/Shared/SharedJobsList.jsx";

/**
 * Create a new instant of ApolloClient and apply cache middleware
 * dataIdFromObject is a function that takes a data object and return
 * a unique identifier to be used when normalizing the data in the store.
 * 
 * I would suggest this read if you're interest at reading more
 * https://www.apollographql.com/docs/react/advanced/caching.html#normalization
 */
const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  dataIdFromObject: o => o.id,
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <App/>
        <JobListing/>
      </Fragment>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />, 
document.getElementById("app"));