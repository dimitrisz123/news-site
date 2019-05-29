import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Drawer from "./drawer/drawer";

const client = new ApolloClient({
<<<<<<< HEAD
	uri: "https://news-project-graphqlapi.tk"
	//uri: "https://nameless-ocean-88008.herokuapp.com/"
=======
	
>>>>>>> 8103770a02a8d38afecf5f5077c2a2e664253f09
	// uri: "http://localhost:4000"
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
