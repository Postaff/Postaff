import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./components/App.jsx";

const client = new ApolloClient({
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <ApolloClient client={client}>
    </ApolloClient>
  )
};

ReactDOM.render(
  <App />, 
document.getElementById("app"));