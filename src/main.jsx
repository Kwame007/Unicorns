import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const uri = 'http://localhost:3000/api/graphql'

const client = new ApolloClient({
  uri,
=======
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// apollo client
const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
>>>>>>> main
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
=======
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
>>>>>>> main
);
