import React from "react";
import "./App.css";
import "./Home.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";

import Home from "./pages/Home";
import WrongRoute from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserPage from "./pages/UserPage";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        {/* <div className="auth-wrapper"> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/userpage/:username?" component={UserPage} />
            <Route exact path="/post/:id" component={SinglePost} />
            {/* <Route exact path="/createpost" component={CreatePost} /> */}

            <Route component={WrongRoute} />
          </Switch>
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
