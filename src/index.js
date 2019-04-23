import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Drawer from  "./drawer/drawer"

const client = new ApolloClient({
	uri: "https://nameless-ocean-88008.herokuapp.com/"
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Drawer />
	</ApolloProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
